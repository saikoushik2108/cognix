import uuid
from typing import List, Optional
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
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
from services.document_parser import (
    extract_text_from_pdf, extract_text_from_docx, extract_text_from_txt
)

app = FastAPI(
    title="KnowFlow AI API",
    description="Document Intelligence to Structured Knowledge Extraction Agent",
    version="1.0.0"
)

# Enable CORS for local Vite dev server and presentation testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory working database initialized with rich seed data
db_documents = list(DEMO_DOCUMENTS)
db_entities = list(DEMO_ENTITIES)
db_relationships = list(DEMO_RELATIONSHIPS)
db_facts = list(DEMO_FACTS)
db_evidence = list(DEMO_EVIDENCE)
db_review_items = list(DEMO_REVIEW_ITEMS)
db_contradictions = list(DEMO_CONTRADICTIONS)
db_semantic_model = list(SEMANTIC_MODEL_ENTITIES)
db_settings = SettingsModel()

@app.get("/")
def read_root():
    return {
        "app": "KnowFlow AI",
        "tagline": "Document Intelligence → Structured Knowledge",
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

@app.post("/documents/upload")
async def upload_document(
    file: Optional[UploadFile] = File(None),
    is_demo: bool = Form(False),
    demo_type: str = Form("contract")
):
    if is_demo or file is None:
        # Load realistic demo contract as requested
        new_id = f"doc-{uuid.uuid4().hex[:4]}"
        demo_doc = {
            "id": new_id,
            "filename": "Contract_001.pdf",
            "file_type": "PDF",
            "file_size": "342 KB",
            "uploaded_at": "2026-03-29",
            "status": "Completed",
            "pages_count": 4,
            "chunks_count": 18,
            "entities_count": 8,
            "relationships_count": 8,
            "facts_count": 5,
            "confidence_score": 0.96,
            "needs_review_count": 2,
            "summary": "Master hardware procurement contract between ABC Technologies Pvt. Ltd. and XYZ Corporation for 500 Dell PowerEdge servers worth ₹2.5 Crore.",
            "text_content": DEMO_DOCUMENTS[0]["text_content"],
            "pages": DEMO_DOCUMENTS[0]["pages"]
        }
        db_documents.insert(0, demo_doc)
        return {"success": True, "document": demo_doc, "message": "Demo document uploaded and processed successfully"}

    file_bytes = await file.read()
    filename = file.filename
    ext = filename.split(".")[-1].lower() if "." in filename else "txt"
    file_type = ext.upper()

    if ext == "pdf":
        extracted = extract_text_from_pdf(file_bytes)
    elif ext in ["docx", "doc"]:
        extracted = extract_text_from_docx(file_bytes)
    else:
        extracted = extract_text_from_txt(file_bytes)

    doc_id = f"doc-{uuid.uuid4().hex[:6]}"
    text_content = extracted.get("text", "") or "No text could be extracted."
    pages_count = extracted.get("pages_count", 1)
    pages = extracted.get("pages", [{"page_number": 1, "title": "Page 1", "text": text_content}])

    # Extract entities, relations, facts via AI service
    extracted_entities = ai_service.extract_entities(text_content, doc_id=doc_id, doc_name=filename)
    extracted_relations = ai_service.extract_relationships(text_content, extracted_entities, doc_id=doc_id, doc_name=filename)
    extracted_facts = ai_service.extract_facts(text_content, doc_id=doc_id, doc_name=filename)

    # Attach to working DB
    db_entities.extend(extracted_entities)
    db_relationships.extend(extracted_relations)
    db_facts.extend(extracted_facts)

    size_kb = len(file_bytes) // 1024 or 1
    new_doc = {
        "id": doc_id,
        "filename": filename,
        "file_type": file_type,
        "file_size": f"{size_kb} KB",
        "uploaded_at": "2026-03-29",
        "status": "Completed",
        "pages_count": pages_count,
        "chunks_count": max(pages_count * 4, 1),
        "entities_count": len(extracted_entities),
        "relationships_count": len(extracted_relations),
        "facts_count": len(extracted_facts),
        "confidence_score": 0.94,
        "needs_review_count": len([e for e in extracted_entities if e["status"] == "Needs Review"]),
        "summary": f"Extracted {len(extracted_entities)} entities and {len(extracted_facts)} business facts from {filename}.",
        "text_content": text_content,
        "pages": pages
    }
    db_documents.insert(0, new_doc)
    return {"success": True, "document": new_doc}

@app.post("/documents/{document_id}/process")
def process_document(document_id: str):
    doc = next((d for d in db_documents if d["id"] == document_id), None)
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")
    doc["status"] = "Completed"
    return {
        "success": True,
        "pipeline": [
            {"step": 1, "name": "Document uploaded", "status": "completed", "duration": "0.12s"},
            {"step": 2, "name": "Text extracted", "status": "completed", "duration": "0.34s"},
            {"step": 3, "name": "Entities identified", "status": "completed", "duration": "0.45s"},
            {"step": 4, "name": "Relationships identified", "status": "completed", "duration": "0.38s"},
            {"step": 5, "name": "Facts extracted", "status": "completed", "duration": "0.29s"},
            {"step": 6, "name": "Evidence validated", "status": "completed", "duration": "0.19s"},
            {"step": 7, "name": "Entity resolution", "status": "completed", "duration": "0.22s"},
            {"step": 8, "name": "Knowledge created", "status": "completed", "duration": "0.15s"}
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
    # Also find relationships involving this entity
    connected_rels = [
        r for r in db_relationships
        if r["source_entity_id"] == entity_id or r["target_entity_id"] == entity_id
    ]
    connected_facts = [
        f for f in db_facts if f["subject_id"] == entity_id
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
    return db_evidence

@app.get("/knowledge/graph")
def get_knowledge_graph():
    """
    Format nodes and edges for React Flow knowledge graph visualization.
    """
    nodes = []
    # Map entity type to color and icon tag
    type_meta = {
        "Organization": {"color": "#3b82f6", "bg": "#eff6ff", "border": "#93c5fd"},
        "Person": {"color": "#8b5cf6", "bg": "#f5f3ff", "border": "#c4b5fd"},
        "Product": {"color": "#10b981", "bg": "#ecfdf5", "border": "#6ee7b7"},
        "Contract": {"color": "#f59e0b", "bg": "#fffbeb", "border": "#fde68a"},
        "Invoice": {"color": "#06b6d4", "bg": "#ecfeff", "border": "#67e8f9"},
        "Location": {"color": "#ec4899", "bg": "#fdf2f8", "border": "#fbcfe8"},
        "Money": {"color": "#14b8a6", "bg": "#f0fdfa", "border": "#99f6e4"},
        "Date": {"color": "#64748b", "bg": "#f8fafc", "border": "#cbd5e1"}
    }

    # Position coordinates layout for core demo entities
    positions = {
        "ent-001": {"x": 80, "y": 140},    # ABC Tech
        "ent-002": {"x": 780, "y": 140},   # XYZ Corp
        "ent-005": {"x": 420, "y": 280},   # Contract C001
        "ent-003": {"x": 420, "y": 480},   # Dell Servers
        "ent-004": {"x": 140, "y": 440},   # John Smith
        "ent-006": {"x": 720, "y": 320},   # INR 2.5 Cr
        "ent-007": {"x": 420, "y": 100},   # 15 Mar 2026
        "ent-008": {"x": 620, "y": 100},   # 15 Mar 2028
        "ent-009": {"x": 680, "y": 480},   # Invoice 034
    }

    for idx, ent in enumerate(db_entities[:12]):
        pos = positions.get(ent["id"], {"x": 100 + (idx % 4) * 220, "y": 50 + (idx // 4) * 180})
        meta = type_meta.get(ent["type"], {"color": "#64748b", "bg": "#f8fafc", "border": "#cbd5e1"})
        nodes.append({
            "id": ent["id"],
            "type": "customKnowledgeNode",
            "position": pos,
            "data": {
                "id": ent["id"],
                "label": ent["name"],
                "type": ent["type"],
                "linkedId": ent.get("linked_entity_id"),
                "confidence": ent.get("confidence", 0.95),
                "status": ent.get("status", "Verified"),
                "source": ent.get("source_doc_name", "Contract_001.pdf"),
                "meta": meta
            }
        })

    edges = []
    for rel in db_relationships[:12]:
        is_unsupported = rel.get("status") == "Unsupported"
        is_disputed = rel.get("status") == "Disputed"
        color = "#ef4444" if (is_unsupported or is_disputed) else "#3b82f6"

        edges.append({
            "id": rel["id"],
            "source": rel["source_entity_id"],
            "target": rel["target_entity_id"],
            "label": rel["relation_type"],
            "animated": not (is_unsupported or is_disputed),
            "style": {
                "stroke": color,
                "strokeWidth": 2,
                "strokeDasharray": "5,5" if (is_unsupported or is_disputed) else "0"
            },
            "data": {
                "id": rel["id"],
                "relation_type": rel["relation_type"],
                "confidence": rel["confidence"],
                "status": rel["status"],
                "evidence": rel["evidence_text"],
                "source_doc": rel["source_doc_name"],
                "source_page": rel["source_page"],
                "warning": rel.get("warning")
            }
        })

    return {
        "nodes": nodes,
        "edges": edges,
        "meta": {
            "total_nodes": len(nodes),
            "total_edges": len(edges)
        }
    }

@app.post("/knowledge/query", response_model=QueryResponse)
def query_knowledge(req: QueryRequest):
    kb = {
        "entities": db_entities,
        "facts": db_facts,
        "relationships": db_relationships
    }
    result = ai_service.answer_knowledge_query(req.query, kb)
    return result

# --- REVIEW CENTER & CONTRADICTIONS ---

@app.get("/review/items")
def get_review_items():
    return db_review_items

@app.post("/review/{item_id}/approve")
def approve_review_item(item_id: str):
    item = next((r for r in db_review_items if r["id"] == item_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Review item not found")
    item["status"] = "Approved"
    # If it was an unmatched entity link, update entity status
    if item["category"] == "Unmatched" and item.get("match_id"):
        for ent in db_entities:
            if item["extracted_text"] in ent["name"]:
                ent["linked_entity_id"] = item["match_id"]
                ent["status"] = "Verified"
    return {"success": True, "item": item, "message": "Item approved and linked successfully"}

@app.post("/review/{item_id}/reject")
def reject_review_item(item_id: str):
    item = next((r for r in db_review_items if r["id"] == item_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Review item not found")
    item["status"] = "Rejected"
    # If relationship was unsupported, mark or remove
    for rel in db_relationships:
        if rel.get("warning") and item["extracted_text"] in f"{rel['source_entity_name']} → {rel['relation_type']} → {rel['target_entity_name']}":
            rel["status"] = "Rejected"
    return {"success": True, "item": item, "message": "Unsupported relationship successfully rejected to avoid hallucination"}

@app.get("/contradictions")
def get_contradictions():
    return db_contradictions

@app.post("/contradictions/{contra_id}/resolve")
def resolve_contradiction(contra_id: str, choice: str = Form("doc_a"), note: str = Form("")):
    item = next((c for c in db_contradictions if c["id"] == contra_id), None)
    if not item:
        raise HTTPException(status_code=404, detail="Contradiction not found")
    item["status"] = f"Resolved ({'Doc A' if choice == 'doc_a' else 'Doc B'})"
    item["resolution_note"] = note or f"User verified {'Doc A' if choice == 'doc_a' else 'Doc B'} as authoritative reference."
    return {"success": True, "contradiction": item}

# --- SEMANTIC MODEL & ANALYTICS ---

@app.get("/semantic-model")
def get_semantic_model():
    return db_semantic_model

@app.get("/analytics")
def get_analytics():
    return ANALYTICS_DATA

@app.get("/settings")
def get_settings():
    return db_settings

@app.post("/settings")
def update_settings(settings: SettingsModel):
    global db_settings
    db_settings = settings
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
        {"id": r["id"], "title": f"{r['source_entity_name']} → {r['relation_type']} → {r['target_entity_name']}", "type": "relationship", "subtitle": f"{r['status']} • {r['source_doc_name']}"}
        for r in db_relationships if term in r["source_entity_name"].lower() or term in r["target_entity_name"].lower() or term in r["relation_type"].lower()
    ]
    matched_facts = [
        {"id": f["id"], "title": f"{f['subject_name']}: {f['predicate']} = {f['value']}", "type": "fact", "subtitle": f"{f['status']} • {f['source_doc_name']}"}
        for f in db_facts if term in f["subject_name"].lower() or term in f["predicate"].lower() or term in f["value"].lower()
    ]
    return {
        "documents": matched_docs[:5],
        "entities": matched_entities[:6],
        "relationships": matched_relationships[:5],
        "facts": matched_facts[:5]
    }
