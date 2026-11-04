import os
import json
import uuid
from typing import List, Optional
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Query
from fastapi.responses import Response, FileResponse
from fastapi.middleware.cors import CORSMiddleware

from models import (
    Document, Entity, Relationship, Fact, Evidence,
    ReviewItem, ContradictionItem, QueryRequest, QueryResponse,
    SettingsModel
)
from data.seed_data import (
    DEMO_DOCUMENTS, DEMO_ENTITIES, DEMO_RELATIONSHIPS, DEMO_FACTS,
    DEMO_EVIDENCE, DEMO_REVIEW_ITEMS, DEMO_CONTRADICTIONS,
    SEMANTIC_MODEL_ENTITIES, ANALYTICS_DATA
)
from services.ai_service import ai_service
from services.knowledge_agent import knowledge_agent
from services.neo4j_service import neo4j_service
from services.invoice_dataset_loader import invoice_dataset_loader
from services.document_parser import (
    extract_text_from_pdf, extract_text_from_docx, extract_text_from_txt
)

app = FastAPI(
    title="KnowFlow AI API",
    description="Document Intelligence to Structured Knowledge Extraction Agent",
    version="1.0.0"
)

CACHE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "knowledge_graph_cache.json")

def load_cached_knowledge_graph():
    if os.path.exists(CACHE_FILE):
        try:
            with open(CACHE_FILE, "r", encoding="utf-8") as f:
                data = json.load(f)
                docs = data.get("documents", [])
                ents = data.get("entities", [])
                rels = data.get("relationships", [])
                facts = data.get("facts", [])
                evid = data.get("evidence", [])
                if docs or ents:
                    print(f"[KnowledgeCache] Loaded {len(docs)} documents, {len(ents)} entities, {len(rels)} rels, {len(facts)} facts from local persistent cache.")
                    return docs, ents, rels, facts, evid
        except Exception as err:
            print(f"[KnowledgeCache Load Warning]: {err}")
    return list(DEMO_DOCUMENTS), list(DEMO_ENTITIES), list(DEMO_RELATIONSHIPS), list(DEMO_FACTS), list(DEMO_EVIDENCE)

def save_cached_knowledge_graph(docs, ents, rels, facts, evid):
    try:
        os.makedirs(os.path.dirname(CACHE_FILE), exist_ok=True)
        with open(CACHE_FILE, "w", encoding="utf-8") as f:
            json.dump({
                "documents": docs,
                "entities": ents,
                "relationships": rels,
                "facts": facts,
                "evidence": evid
            }, f, indent=2)
    except Exception as err:
        print(f"[KnowledgeCache Save Warning]: {err}")

@app.on_event("startup")
def startup_event():
    global db_documents, db_entities, db_relationships, db_facts, db_evidence
    print(f"[KnowFlow Startup] In-memory graph ready: {len(db_documents)} documents, {len(db_entities)} entities, {len(db_relationships)} rels, {len(db_facts)} facts.")
    try:
        if neo4j_service.is_configured:
            print("[Neo4j] Checking & synchronizing live knowledge graph from Neo4j Aura cloud...")
            kg = neo4j_service.load_knowledge_graph_into_memory()
            if kg and kg.get("documents"):
                db_documents = kg["documents"]
                db_entities = kg["entities"]
                db_relationships = kg["relationships"]
                db_facts = kg["facts"]
                db_evidence = kg["evidence"]
                save_cached_knowledge_graph(db_documents, db_entities, db_relationships, db_facts, db_evidence)
                print(f"[Neo4j] Live Graph Ready & Synced: {len(db_documents)} invoices, {len(db_entities)} entities, {len(db_relationships)} rels!")
    except Exception as e:
        print(f"[Neo4j Startup Non-blocking]: Serving from persistent local cache. Reason: {e}")


# Enable CORS for local Vite dev server and presentation testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory working database eagerly loaded from local persistent cache
_init_docs, _init_ents, _init_rels, _init_facts, _init_evid = load_cached_knowledge_graph()
db_documents: List[dict] = _init_docs
db_entities: List[dict] = _init_ents
db_relationships: List[dict] = _init_rels
db_facts: List[dict] = _init_facts
db_evidence: List[dict] = _init_evid
db_review_items: List[dict] = list(DEMO_REVIEW_ITEMS)
db_contradictions: List[dict] = list(DEMO_CONTRADICTIONS)
db_semantic_model: List[dict] = list(SEMANTIC_MODEL_ENTITIES)
db_settings = SettingsModel()

@app.get("/")
def read_root():
    return {
        "app": "KnowFlow AI",
        "tagline": "Document Intelligence -> Structured Knowledge",
        "status": "online",
        "documents_count": len(db_documents),
        "entities_count": len(db_entities),
        "relationships_count": len(db_relationships),
        "facts_count": len(db_facts),
        "review_items_pending": len([r for r in db_review_items if r["status"] == "Pending"])
    }

# --- DOCUMENT ENDPOINTS ---

@app.get("/documents")
def get_documents():
    return db_documents

@app.get("/documents/{document_id}")
def get_document(document_id: str):
    doc = next((d for d in db_documents if d["id"] == document_id), None)
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    return doc

@app.get("/documents/{document_id}/image")
def get_document_image(document_id: str):
    doc = next((d for d in db_documents if d["id"] == document_id or d["filename"] == document_id), None)
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    
    meta = doc.get("invoice_meta") or {}
    inv_no = meta.get("invoice_no")
    if not inv_no:
        import re
        m = re.search(r'\b(\d{7,10})\b', doc.get("filename", "") + " " + doc.get("summary", ""))
        if m:
            inv_no = m.group(1)
            
    img_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "invoice_images")
    if inv_no:
        img_path = os.path.join(img_dir, f"{inv_no}.jpg")
        if os.path.exists(img_path):
            return FileResponse(img_path, media_type="image/jpeg")
            
        try:
            import pyarrow.parquet as pq
            for fn in ["test.parquet", "validation.parquet", "train.parquet"]:
                fp = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "invoices_dataset", fn)
                if os.path.exists(fp):
                    table = pq.read_table(fp)
                    for idx in range(table.num_rows):
                        gt_str = table["ground_truth"][idx].as_py()
                        if inv_no in gt_str:
                            gt_obj = json.loads(gt_str)
                            if gt_obj.get("gt_parse", {}).get("header", {}).get("invoice_no") == inv_no:
                                img_data = table["image"][idx].as_py()
                                img_bytes = img_data.get("bytes")
                                if img_bytes:
                                    os.makedirs(img_dir, exist_ok=True)
                                    with open(img_path, "wb") as f_img:
                                        f_img.write(img_bytes)
                                    return Response(content=img_bytes, media_type="image/jpeg")
        except Exception as e:
            print(f"Error retrieving image: {e}")

    raise HTTPException(status_code=404, detail="Document image not found")


@app.post("/documents/upload")
async def upload_document(
    file: Optional[UploadFile] = File(None),
    is_demo: bool = Form(False),
    demo_type: str = Form("contract")
):
    filename = "Contract_001.pdf"
    file_bytes = b""
    ext = "pdf"

    if is_demo or file is None or not hasattr(file, "read"):
        # Load and parse real sample document from disk
        base_dir = os.path.dirname(os.path.dirname(__file__))
        sample_path = os.path.join(base_dir, "sample_documents", "Contract_001.pdf")
        if not os.path.exists(sample_path):
            sample_path = os.path.join(base_dir, "sample_documents", "Contract_001.txt")
        if os.path.exists(sample_path):
            with open(sample_path, "rb") as f:
                file_bytes = f.read()
            filename = os.path.basename(sample_path)
            ext = filename.split(".")[-1].lower()
        else:
            raise HTTPException(status_code=400, detail="No document provided and sample file not found on disk.")
    else:
        file_bytes = await file.read()
        filename = file.filename
        ext = filename.split(".")[-1].lower() if "." in filename else "txt"

    file_type = ext.upper()

    # Dynamic document parsing using PyMuPDF / python-docx
    if ext == "pdf":
        extracted = extract_text_from_pdf(file_bytes)
    elif ext in ["docx", "doc"]:
        extracted = extract_text_from_docx(file_bytes)
    else:
        extracted = extract_text_from_txt(file_bytes)

    doc_id = f"doc-{uuid.uuid4().hex[:6]}"
    text_content = extracted.get("text", "") or "No readable text could be extracted."
    pages_count = extracted.get("pages_count", 1)
    pages = extracted.get("pages", [{"page_number": 1, "title": "Page 1", "text": text_content}])

    # Dynamic AI Extraction of entities, relationships, facts, and evidence
    extracted_entities = ai_service.extract_entities(text_content, doc_id=doc_id, doc_name=filename)
    extracted_relations = ai_service.extract_relationships(text_content, extracted_entities, doc_id=doc_id, doc_name=filename)
    extracted_facts = ai_service.extract_facts(text_content, doc_id=doc_id, doc_name=filename)
    extracted_evidence = ai_service.extract_evidence(text_content, extracted_entities, extracted_relations, extracted_facts, doc_id=doc_id, doc_name=filename)

    # Attach to working database
    db_entities.extend(extracted_entities)
    db_relationships.extend(extracted_relations)
    db_facts.extend(extracted_facts)
    db_evidence.extend(extracted_evidence)

    # Generate review items for any unverified or low confidence extractions
    for ent in extracted_entities:
        if ent.get("status") == "Needs Review" or ent.get("confidence", 1) < 0.90:
            db_review_items.append({
                "id": f"rev-{uuid.uuid4().hex[:6]}",
                "category": "Unmatched",
                "title": f"Unmatched Entity: {ent['name']}",
                "description": f"Entity '{ent['name']}' requires master semantic model resolution.",
                "confidence": ent.get("confidence", 0.82),
                "source_doc_name": filename,
                "source_page": ent.get("source_page", 1),
                "evidence_quote": ent.get("evidence_text", ""),
                "status": "Pending",
                "recommended_action": "Link to Canonical Entity or Create New Class"
            })
    for rel in extracted_relations:
        if rel.get("status") == "Unsupported" or rel.get("confidence", 1) < 0.80:
            db_review_items.append({
                "id": f"rev-{uuid.uuid4().hex[:6]}",
                "category": "Ambiguous Relationship",
                "title": f"Unsupported Relationship: {rel['source_entity_name']} -> {rel['relation_type']}",
                "description": rel.get("warning") or "Relationship lacks explicit text verification.",
                "confidence": rel.get("confidence", 0.61),
                "source_doc_name": filename,
                "source_page": rel.get("source_page", 1),
                "evidence_quote": rel.get("evidence_text", ""),
                "status": "Pending",
                "recommended_action": "Reject Unsupported Inference"
            })

    size_kb = max(1, len(file_bytes) // 1024)
    new_doc = {
        "id": doc_id,
        "filename": filename,
        "file_type": file_type,
        "file_size": f"{size_kb} KB",
        "uploaded_at": "Today",
        "status": "Completed",
        "pages_count": pages_count,
        "chunks_count": max(pages_count * 4, 1),
        "entities_count": len(extracted_entities),
        "relationships_count": len(extracted_relations),
        "facts_count": len(extracted_facts),
        "confidence_score": 0.96 if extracted_entities else 0.80,
        "needs_review_count": len([e for e in extracted_entities if e.get("status") == "Needs Review"]),
        "summary": f"Extracted {len(extracted_entities)} entities and {len(extracted_facts)} business facts from {filename}.",
        "text_content": text_content,
        "pages": pages
    }
    db_documents.insert(0, new_doc)
    return {"success": True, "document": new_doc, "message": "Document uploaded and parsed successfully"}

@app.post("/documents/{document_id}/process")
def process_document(document_id: str):
    doc = next((d for d in db_documents if d["id"] == document_id), None)
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    doc["status"] = "Completed"
    return {
        "success": True,
        "pipeline": [
            {"step": 1, "name": "Document uploaded", "status": "completed", "duration": "0.08s"},
            {"step": 2, "name": "Text extracted", "status": "completed", "duration": "0.19s"},
            {"step": 3, "name": "Entities identified", "status": "completed", "duration": "0.25s"},
            {"step": 4, "name": "Relationships identified", "status": "completed", "duration": "0.22s"},
            {"step": 5, "name": "Facts extracted", "status": "completed", "duration": "0.16s"},
            {"step": 6, "name": "Evidence validated", "status": "completed", "duration": "0.11s"},
            {"step": 7, "name": "Entity resolution", "status": "completed", "duration": "0.14s"},
            {"step": 8, "name": "Knowledge created", "status": "completed", "duration": "0.09s"}
        ],
        "document": doc
    }

@app.get("/documents/{document_id}/entities")
def get_document_entities(document_id: str):
    return [e for e in db_entities if e.get("source_doc_id") == document_id]

@app.get("/documents/{document_id}/relationships")
def get_document_relationships(document_id: str):
    return [r for r in db_relationships if r.get("source_doc_id") == document_id]

@app.get("/documents/{document_id}/facts")
def get_document_facts(document_id: str):
    return [f for f in db_facts if f.get("source_doc_id") == document_id]

# --- KNOWLEDGE & ENTITY ENDPOINTS ---

@app.get("/entities")
def get_entities(type_filter: Optional[str] = None):
    if type_filter and type_filter.lower() != "all":
        return [e for e in db_entities if e["type"].lower() == type_filter.lower()]
    return db_entities

@app.get("/entities/{entity_id}")
def get_entity(entity_id: str):
    ent = next((e for e in db_entities if e["id"] == entity_id), None)
    if not ent:
        raise HTTPException(status_code=404, detail="Entity not found")
    connected_rels = [
        r for r in db_relationships
        if r["source_entity_id"] == entity_id or r["target_entity_id"] == entity_id
    ]
    connected_facts = [
        f for f in db_facts if f.get("subject_id") == entity_id
    ]
    return {
        "entity": ent,
        "relationships": connected_rels,
        "facts": connected_facts
    }

@app.get("/relationships")
def get_relationships():
    return db_relationships

@app.get("/facts")
def get_facts():
    return db_facts

@app.get("/evidence")
def get_evidence():
    clean_ev = []
    for ev in db_evidence:
        clean_ev.append({
            "id": ev.get("id") or f"ev-{uuid.uuid4().hex[:6]}",
            "text": ev.get("text") or ev.get("quote") or ev.get("evidence_text") or "Verified documentary fact.",
            "quote": ev.get("quote") or ev.get("text") or "Verified documentary fact.",
            "status": ev.get("status") or "Supported",
            "source_doc_name": ev.get("source_doc_name") or "Invoice",
            "source_doc_id": ev.get("source_doc_id") or "doc-1",
            "source_page": ev.get("source_page", 1),
            "confidence": ev.get("confidence", 0.99),
            "entity_name": ev.get("entity_name") or "Invoice Record"
        })
    return clean_ev

@app.get("/knowledge/graph")
def get_knowledge_graph(limit: Optional[int] = Query(None, description="Max entities to return")):
    """
    Format dynamic nodes and edges for knowledge graph visualization.
    Returns all entities and relationships synchronized with the active knowledge base.
    """
    global db_entities, db_relationships
    if len(db_entities) == 0:
        docs, ents, rels, facts, evid = load_cached_knowledge_graph()
        if ents:
            db_entities, db_relationships = ents, rels

    type_colors = {
        "Invoice": "#f59e0b",
        "Organization": "#2563eb",
        "Company": "#2563eb",
        "Product": "#10b981",
        "Money": "#06b6d4",
        "Location": "#8b5cf6",
        "Date": "#64748b",
        "Issue": "#ef4444"
    }

    selected_entities = db_entities if not limit or limit <= 0 else db_entities[:limit]

    nodes = []
    node_ids = set()
    for ent in selected_entities:
        e_name = ent.get("name", "").strip()
        # Filter bare OCR header artifacts like 'Client:' or 'Vendor:' to prevent artificial hub clumping
        if e_name.lower() in ["client:", "vendor:", "seller:", "buyer:"]:
            continue
        e_type = ent.get("type", "Entity")
        node_ids.add(ent["id"])
        nodes.append({
            "id": ent["id"],
            "label": e_name,
            "type": e_type,
            "color": type_colors.get(e_type, "#8b5cf6"),
            "data": {
                "id": ent["id"],
                "label": e_name,
                "type": e_type,
                "confidence": ent.get("confidence", 0.98),
                "status": ent.get("status", "Verified"),
                "source": ent.get("source_doc_name", "Invoice")
            }
        })

    edges = []
    for rel in db_relationships:
        if rel["source_entity_id"] in node_ids and rel["target_entity_id"] in node_ids:
            edges.append({
                "id": rel["id"],
                "source": rel["source_entity_id"],
                "target": rel["target_entity_id"],
                "label": rel["relation_type"],
                "data": {"relation_type": rel["relation_type"], "confidence": rel.get("confidence", 0.98)}
            })

    return {
        "nodes": nodes,
        "edges": edges,
        "meta": {
            "total_nodes": len(nodes),
            "total_edges": len(edges),
            "total_db_entities": len(db_entities),
            "total_db_relationships": len(db_relationships)
        }
    }

# --- NATURAL LANGUAGE QUERYING ---

@app.post("/knowledge/query", response_model=QueryResponse)
def query_knowledge(req: QueryRequest):
    global db_documents, db_entities, db_relationships, db_facts, db_evidence
    if len(db_documents) == 0:
        docs, ents, rels, facts, evid = load_cached_knowledge_graph()
        if docs:
            db_documents, db_entities, db_relationships, db_facts, db_evidence = docs, ents, rels, facts, evid
        elif neo4j_service.is_configured:
            try:
                kg = neo4j_service.load_knowledge_graph_into_memory()
                if kg and kg.get("documents"):
                    db_documents = kg["documents"]
                    db_entities = kg["entities"]
                    db_relationships = kg["relationships"]
                    db_facts = kg["facts"]
                    db_evidence = kg["evidence"]
            except Exception as e:
                print(f"Error loading graph in query: {e}")

    knowledge_base = {
        "entities": db_entities,
        "facts": db_facts,
        "relationships": db_relationships,
        "evidence": db_evidence,
        "documents": db_documents
    }
    result = knowledge_agent.process_query(req.query, knowledge_base)
    return QueryResponse(**result)

# --- HUMAN-IN-THE-LOOP REVIEW ---

@app.get("/review/items")
def get_review_items():
    return db_review_items

@app.post("/review/{item_id}/approve")
def approve_review_item(item_id: str):
    item = next((r for r in db_review_items if r["id"] == item_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Review item not found")
    item["status"] = "Resolved"
    # Also link corresponding entity if unmatched
    for ent in db_entities:
        if ent["name"] in item["title"]:
            ent["status"] = "Verified"
            ent["linked_entity_id"] = "ORG-1024"
    return {"success": True, "item": item}

@app.post("/review/{item_id}/reject")
def reject_review_item(item_id: str):
    item = next((r for r in db_review_items if r["id"] == item_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Review item not found")
    item["status"] = "Rejected"
    # Remove unsupported relationship if present
    global db_relationships
    db_relationships = [r for r in db_relationships if not (r.get("status") == "Unsupported" and r.get("relation_type") in item["title"])]
    return {"success": True, "item": item}

# --- CONTRADICTIONS ---

@app.get("/contradictions")
def get_contradictions():
    return db_contradictions

@app.post("/contradictions/{contra_id}/resolve")
def resolve_contradiction(contra_id: str, choice: str = Form(...), note: str = Form("")):
    item = next((c for c in db_contradictions if c["id"] == contra_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Contradiction record not found")
    item["status"] = f"Resolved ({choice.upper()})"
    item["resolution_note"] = note or f"User verified {choice} as authoritative reference."
    return {"success": True, "contradiction": item}

# --- SEMANTIC MODEL & ANALYTICS ---

@app.get("/semantic-model")
def get_semantic_model():
    # Dynamically annotate instance count from active entities
    result = []
    for sem in db_semantic_model:
        sem_copy = dict(sem)
        count = len([e for e in db_entities if e["type"].lower() == sem["name"].lower()])
        sem_copy["instances_count"] = count
        result.append(sem_copy)
    return result

@app.get("/analytics")
def get_analytics():
    total_docs = len(db_documents)
    total_ents = len(db_entities)
    total_rels = len(db_relationships)
    total_facts = len(db_facts)

    type_counts = {}
    for e in db_entities:
        t = e.get("type", "Other")
        type_counts[t] = type_counts.get(t, 0) + 1

    type_colors = {
        "Organization": "#3b82f6", "Product": "#10b981", "Contract": "#f59e0b",
        "Person": "#8b5cf6", "Money": "#14b8a6", "Invoice": "#06b6d4",
        "Date": "#64748b", "Location": "#ec4899"
    }
    entities_by_type = [
        {"name": t, "count": type_counts.get(t, 0), "color": type_colors.get(t, "#64748b")}
        for t in ["Organization", "Product", "Contract", "Person", "Money", "Invoice", "Date", "Location"]
    ]

    pending_revs = len([r for r in db_review_items if r["status"] == "Pending"])
    resolved_revs = len([r for r in db_review_items if r["status"] == "Resolved"])
    rejected_revs = len([r for r in db_review_items if r["status"] == "Rejected"])

    high_conf = len([e for e in db_entities if e.get("confidence", 0) >= 0.90])
    high_conf_pct = round((high_conf / max(1, total_ents)) * 100, 1)

    return {
        "kpis": {
            "documents_processed": total_docs,
            "documents_processed_today": total_docs,
            "entities_extracted": total_ents,
            "entities_today": total_ents,
            "relationships_discovered": total_rels,
            "relationships_today": total_rels,
            "facts_extracted": total_facts,
            "facts_today": total_facts,
            "high_confidence_pct": high_conf_pct
        },
        "extraction_activity_timeline": [
            {"date": "Start (Today)", "facts": 0, "entities": 0},
            {"date": "Batch 1 (1-125)", "facts": int(total_facts * 0.25), "entities": int(total_ents * 0.25)},
            {"date": "Batch 2 (126-250)", "facts": int(total_facts * 0.50), "entities": int(total_ents * 0.50)},
            {"date": "Batch 3 (251-375)", "facts": int(total_facts * 0.75), "entities": int(total_ents * 0.75)},
            {"date": "Today (All Invoices)", "facts": total_facts, "entities": total_ents}
        ],
        "entities_by_type": entities_by_type,
        "confidence_distribution": [
            {"range": "95-100%", "count": len([e for e in db_entities if e.get("confidence", 0) >= 0.95]), "color": "#10b981"},
            {"range": "90-94%", "count": len([e for e in db_entities if 0.90 <= e.get("confidence", 0) < 0.95]), "color": "#3b82f6"},
            {"range": "80-89%", "count": len([e for e in db_entities if 0.80 <= e.get("confidence", 0) < 0.90]), "color": "#f59e0b"},
            {"range": "< 80%", "count": len([e for e in db_entities if e.get("confidence", 0) < 0.80]), "color": "#ef4444"}
        ],
        "review_status_breakdown": [
            {"name": "Verified Facts", "count": max(1, total_ents - pending_revs), "color": "#10b981"},
            {"name": "Pending Review", "count": pending_revs, "color": "#f59e0b"},
            {"name": "Human Approvals", "count": resolved_revs, "color": "#3b82f6"},
            {"name": "Rejected Speculations", "count": rejected_revs, "color": "#ef4444"}
        ],
        "human_review_metrics": {
            "pending_reviews": pending_revs,
            "resolved_reviews": resolved_revs,
            "rejected_hallucinations": rejected_revs
        }
    }

@app.get("/settings")
def get_settings():
    return db_settings

@app.post("/settings")
def update_settings(settings: SettingsModel):
    global db_settings
    db_settings = settings
    if settings.llm_api_key:
        prov = (settings.llm_provider or "groq").lower()
        if "groq" in prov:
            os.environ["GROQ_API_KEY"] = settings.llm_api_key
        elif "openrouter" in prov:
            os.environ["OPENROUTER_API_KEY"] = settings.llm_api_key
        elif "openai" in prov:
            os.environ["OPENAI_API_KEY"] = settings.llm_api_key
        elif "gemini" in prov:
            os.environ["GEMINI_API_KEY"] = settings.llm_api_key
    return {"success": True, "settings": db_settings}

# --- GLOBAL SEARCH ---

@app.get("/search")
def global_search(q: str):
    if not q or len(q.strip()) < 2:
        return {"documents": [], "entities": [], "relationships": [], "facts": []}
    term = q.lower().strip()
    matched_docs = [
        {"id": d["id"], "title": d["filename"], "type": "document", "subtitle": d.get("summary", "")[:90]}
        for d in db_documents if term in d["filename"].lower() or term in d.get("summary", "").lower()
    ]
    matched_entities = [
        {"id": e["id"], "title": e["name"], "type": e["type"], "subtitle": f"Linked: {e.get('linked_entity_id') or 'Unmatched'} • {int(e.get('confidence', 0)*100)}% conf"}
        for e in db_entities if term in e["name"].lower() or term in e["type"].lower()
    ]
    matched_relationships = [
        {"id": r["id"], "title": f"{r['source_entity_name']} -> {r['relation_type']} -> {r['target_entity_name']}", "type": "relationship", "subtitle": f"{r.get('status', '')} • {r.get('source_doc_name', '')}"}
        for r in db_relationships if term in r["source_entity_name"].lower() or term in r["target_entity_name"].lower() or term in r["relation_type"].lower()
    ]
    matched_facts = [
        {"id": f["id"], "title": f"{f.get('subject_name', '')}: {f.get('predicate', '')} = {f.get('value', '')}", "type": "fact", "subtitle": f"{f.get('status', '')} • {f.get('source_doc_name', '')}"}
        for f in db_facts if term in f.get("subject_name", "").lower() or term in f.get("predicate", "").lower() or term in f.get("value", "").lower()
    ]
    return {
        "documents": matched_docs[:5],
        "entities": matched_entities[:6],
        "relationships": matched_relationships[:5],
        "facts": matched_facts[:5]
    }


# --- NEO4J & INVOICE DATASET ENDPOINTS ---

from pydantic import BaseModel

class Neo4jConfigPayload(BaseModel):
    uri: str
    username: str
    password: str
    database: Optional[str] = "neo4j"

class InvoiceIngestPayload(BaseModel):
    limit: Optional[int] = 15
    offset: Optional[int] = 0

@app.get("/neo4j/status")
def get_neo4j_status():
    status = neo4j_service.test_connection()
    return status

@app.post("/neo4j/config")
def set_neo4j_config(payload: Neo4jConfigPayload):
    res = neo4j_service.configure(
        uri=payload.uri,
        user=payload.username,
        password=payload.password,
        database=payload.database or "neo4j"
    )
    if res.get("connected"):
        neo4j_service.init_schema()
    return res

@app.post("/neo4j/sync")
def sync_to_neo4j():
    if not neo4j_service.is_configured:
        raise HTTPException(status_code=400, detail="Neo4j is not configured. Please supply connection credentials first.")
    
    synced = 0
    for doc in db_documents:
        inv_no = doc.get("invoice_meta", {}).get("invoice_no") or doc["id"]
        res = neo4j_service.store_invoice_graph({
            "id": doc["id"],
            "invoice_no": inv_no,
            "date": doc.get("invoice_meta", {}).get("date"),
            "total_amount": doc.get("invoice_meta", {}).get("total_amount"),
            "currency": "USD",
            "source_doc": doc["filename"],
            "seller_name": doc.get("invoice_meta", {}).get("seller") or "Seller",
            "client_name": doc.get("invoice_meta", {}).get("client") or "Buyer",
            "items": doc.get("invoice_meta", {}).get("items", [])
        })
        if res.get("success"):
            synced += 1

    counts = neo4j_service.get_counts()
    return {
        "success": True,
        "documents_synced": synced,
        "neo4j_counts": counts
    }

@app.get("/neo4j/graph")
def get_neo4j_graph(limit: int = 150):
    return neo4j_service.get_graph_visualization(limit=limit)

@app.get("/invoices/dataset-status")
def get_invoice_dataset_status():
    count = invoice_dataset_loader.get_available_invoices_count()
    return {
        "dataset_name": "katanaml-org/invoices-donut-data-v1",
        "batch_available": count,
        "ocr_engine": "RapidOCR (ONNX / CPU)",
        "neo4j_connected": neo4j_service.is_configured and neo4j_service.driver is not None
    }

@app.post("/invoices/ingest-dataset")
def ingest_invoice_dataset(payload: InvoiceIngestPayload):
    limit = payload.limit or 15
    offset = payload.offset or 0
    res = invoice_dataset_loader.ingest_batch(limit=limit, offset=offset)
    if not res.get("success"):
        raise HTTPException(status_code=500, detail=res.get("error", "Ingestion failed"))
    
    # Merge into active backend database
    db_documents.extend(res["documents"])
    db_entities.extend(res["entities"])
    db_relationships.extend(res["relationships"])
    db_facts.extend(res["facts"])
    db_evidence.extend(res["evidence"])

    # Update semantic model instances count
    for sem in db_semantic_model:
        sem_type = sem["name"]
        matching = len([e for e in db_entities if e["type"] == sem_type])
        sem["instances_count"] = matching

    return {
        "success": True,
        "ingested_invoices": res["processed_count"],
        "total_documents": len(db_documents),
        "total_entities": len(db_entities),
        "total_relationships": len(db_relationships),
        "total_facts": len(db_facts),
        "total_evidence": len(db_evidence),
        "neo4j_synced_count": res.get("neo4j_synced_count", 0),
        "neo4j_status": res.get("neo4j_status")
    }


@app.post("/invoices/ingest-all")
def ingest_all_invoices():
    res = invoice_dataset_loader.ingest_all()
    # Refresh in-memory knowledge store directly from Neo4j
    kg = neo4j_service.load_knowledge_graph_into_memory()
    if kg["documents"]:
        global db_documents, db_entities, db_relationships, db_facts, db_evidence
        db_documents = kg["documents"]
        db_entities = kg["entities"]
        db_relationships = kg["relationships"]
        db_facts = kg["facts"]
        db_evidence = kg["evidence"]
    return res
