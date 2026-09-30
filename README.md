# KnowFlow AI

**From Documents to Evidence-Backed Knowledge**

KnowFlow AI is an evidence-backed knowledge intelligence platform that extracts verified business entities, relationships, and structured facts from contracts, invoices, and organizational reports. It links information to an existing business semantic model, enforces strict anti-hallucination guardrails, and provides transparent question-answering with verbatim citation traceability.

---

## 1. Problem Statement & Solution

### Problem
Business knowledge is trapped inside unstructured documents. Organizations store critical business commitments, pricing terms, SLAs, and supplier obligations across thousands of contracts, invoices, and reports. OCR and standard text extraction convert these files into raw text strings, but raw text alone cannot reveal the underlying entity networks, commercial relationships, or auditable business facts needed for enterprise decision making.

### Solution
KnowFlow AI systematically parses unstructured documents, extracts entities and directional relationships, extracts discrete key-value business facts, links variations to canonical registry records, preserves verbatim sentence quotations as source evidence, and exposes the resulting knowledge through an interactive knowledge graph and evidence-backed query interface.

---

## 2. Architecture & Pipeline

```text
Document (PDF / DOCX / TXT)
   ↓
Text Extraction [Deterministic: PyMuPDF / python-docx]
   ↓
Entity Extraction [AI: Schema-constrained NER]
   ↓
Relationship Extraction [AI: Semantic Triples]
   ↓
Fact Extraction [AI: Key-Value Predicates]
   ↓
Evidence Mapping [Deterministic: Verbatim Substring Locator]
   ↓
Entity Resolution [Hybrid: Legal Normalization + Fuzzy Matching]
   ↓
Knowledge Store & Representation [Deterministic Graph Store]
   ↓
Knowledge Graph [Deterministic Interactive Visualization]
   ↓
Evidence-Backed Query [Hybrid: Graph Traversal + Grounded Synthesis]
```

### Key Principles
1. **Evidence-Backed Extraction**: Every entity, relationship, and fact requires verbatim source evidence with exact document and page citations.
2. **Explicit Uncertainty**: The system distinguishes confirmed facts, partial delivery installments, contextual variances, and unsupported inferences. It never invents facts.
3. **Entity Resolution**: Normalizes company name variants and links them to canonical registry IDs (e.g. `ABC Technologies Pvt Ltd` → `ORG-1024`).
4. **Human-in-the-Loop Review**: Low-confidence assertions, ambiguous entities, and direct contradictions are quarantined into review queues for human signoff.
5. **AI + Deterministic Validation**: Leverages AI for pattern recognition while enforcing deterministic string verification, offset mapping, and graph integrity.
6. **Traceable Knowledge**: All answers in "Ask Knowledge" include an auditable **"How did we get this answer?"** reasoning trail.

---

## 3. Tech Stack

- **Frontend**:
  - React 19 + Vite
  - React Flow (`@xyflow/react` v12) for interactive knowledge graph exploration
  - Recharts for extraction telemetry, confidence distribution, and category breakdown
  - Lucide React icons
  - Vanilla CSS design tokens (enterprise light theme, responsive, zero heavy CSS framework overhead)
- **Backend**:
  - FastAPI (Python 3.11)
  - Pydantic v2 data validation schemas
  - PyMuPDF (`fitz`) for vector text parsing and page indexing
  - `python-docx` for Word document processing
  - Uvicorn ASGI server with automatic reload

---

## 4. Project Directory Structure

```text
cognix/
├── backend/
│   ├── .venv/                      # Python virtual environment (CPython 3.11)
│   ├── main.py                     # FastAPI application & REST endpoints
│   ├── models.py                   # Pydantic models (Document, Entity, Relationship, Fact, etc.)
│   ├── requirements.txt            # FastAPI, Uvicorn, PyMuPDF, python-docx, Pydantic
│   ├── data/
│   │   └── seed_data.py            # Master seed documents, entities, relations, facts, contradictions
│   └── services/
│       ├── ai_service.py           # AI extraction & query reasoning service abstraction
│       └── document_parser.py      # PyMuPDF & python-docx file extraction service
├── frontend/
│   ├── index.html                  # HTML entrypoint with Plus Jakarta Sans & JetBrains Mono
│   ├── vite.config.js              # Vite config with /api proxy to backend (port 8000)
│   ├── package.json                # React 19, Vite, React Router, React Flow, Recharts, Lucide
│   └── src/
│       ├── main.jsx                # Application root
│       ├── App.jsx                 # React Router definitions for all 16 pages
│       ├── index.css               # Design system tokens, typography, clean light theme
│       ├── components/
│       │   ├── layout/
│       │   │   ├── AppShell.jsx    # Persistent layout with Header, Sidebar & Modals
│       │   │   ├── Header.jsx      # Global search, notifications popover, walkthrough guide
│       │   │   └── Sidebar.jsx     # 4-section navigation (Overview, Knowledge, Intelligence, System)
│       │   └── common/
│       │       ├── EntityBadge.jsx     # Color-coded badges for 8 entity types
│       │       ├── ConfidenceBadge.jsx # Verified (green), review (amber), flagged (red)
│       │       ├── KpiCard.jsx         # Metric card with icons and trends
│       │       ├── UploadModal.jsx     # Drag-and-drop file upload & Demo Document loader
│       │       └── HelpModal.jsx       # 12-step jury walkthrough and feature overview
│       ├── pages/
│       │   ├── DashboardPage.jsx            # Real-time intelligence dashboard
│       │   ├── DocumentsPage.jsx            # Document catalog & upload dropzone
│       │   ├── DocumentProcessingPage.jsx   # 8-stage interactive visual pipeline
│       │   ├── DocumentInspectorPage.jsx    # 3-column grounded viewer with search & click-to-highlight
│       │   ├── EntityExplorerPage.jsx       # Searchable & sortable entity catalog
│       │   ├── RelationshipExplorerPage.jsx # Directional triple cards with guardrail warnings
│       │   ├── FactExplorerPage.jsx         # Structured fact table with evidence triggers
│       │   ├── EvidenceCenterPage.jsx       # Verbatim sentence provenance center
│       │   ├── ReviewCenterPage.jsx         # Human-in-the-loop review queue
│       │   ├── KnowledgeGraphPage.jsx       # Interactive React Flow graph with JSON export
│       │   ├── SemanticModelPage.jsx        # Enterprise ontology schema explorer
│       │   ├── AskKnowledgePage.jsx         # Evidence-backed natural language query interface
│       │   ├── ContradictionsPage.jsx       # Difference vs contradiction distinction resolver
│       │   ├── AnalyticsPage.jsx            # Recharts telemetry & confidence breakdown
│       │   ├── ArchitecturePage.jsx         # AI vs Deterministic pipeline visualizer
│       │   └── SettingsPage.jsx             # AI engine & hallucination guardrails configuration
│       └── services/
│           ├── aiService.js        # Client service abstraction connecting to /api with offline fallback
│           └── mockData.js         # Client dataset guarantee for presentation reliability
├── sample_documents/
│   ├── Contract_001.pdf            # Real binary PDF agreement (ABC Technologies & XYZ Corp)
│   ├── Contract_001.txt            # Plaintext counterpart
│   ├── Invoice_034.pdf             # Real binary PDF invoice (Batch 1 partial delivery)
│   └── Invoice_034.txt             # Plaintext counterpart
└── README.md
```

---

## 5. Quickstart — How to Run

### Backend

```bash
cd backend

# Create virtual environment and install dependencies:
uv venv .venv
uv pip install -r requirements.txt

# Start FastAPI server on port 8000:
uv run uvicorn main:app --port 8000 --reload
```

- API Base: `http://127.0.0.1:8000/`
- Interactive OpenAPI Docs: `http://127.0.0.1:8000/docs`

### Frontend

```bash
cd frontend
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```

- Web UI: `http://127.0.0.1:5173/`

---

## 6. End-to-End Presentation Flow

1. **Dashboard (`/`)**: Inspect real-time metrics (Documents, Entities, Relationships, Facts, Evidence Records, Review Queue items).
2. **Documents (`/documents`)**: Click **"Upload / Ingest Document"** → select **"Load Real Sample Document (Contract_001.pdf)"**.
3. **Processing Pipeline (`/processing/:id`)**: Watch the 8-stage processing timeline complete with stage durations, item counts, and status badges.
4. **Document Inspector (`/documents/inspector/:id`)**:
   - Column 1: Page navigation (Page 1 cover, Page 2 scope & consideration, Page 3 delivery, Page 4 signatures).
   - Column 2: In-document search and interactive color-coded entity highlight chips.
   - Column 3: Tabbed knowledge view (Entities, Relationships, Facts, Evidence). Clicking any item highlights its exact source in the center text.
5. **Entities (`/knowledge/entities`)**: Search for `ABC Technologies` or filter by Organization/Person/Product.
6. **Relationships (`/knowledge/relationships`)**: Inspect directional triples (`ABC Technologies → SIGNED → Contract C001`, `XYZ Corporation → SUPPLIES → Dell PowerEdge Servers`). Notice the flagged assumption warning on `John Smith → CEO_OF`.
7. **Facts (`/knowledge/facts`)**: Click a fact like `Contract Value = INR 2.5 Crore` to reveal the slide-out Evidence Drawer showing the exact verbatim quotation from Contract_001.pdf Page 2.
8. **Entity Resolution (`/review?tab=unmatched`)**: Accept the canonical match linking `ABC Technologies Pvt Ltd` to `ORG-1024` with 96% similarity.
9. **Knowledge Graph (`/graph`)**: Explore interactive React Flow nodes with semantic colors, edge labels, search, entity-type filters, confidence slider, and click **"Export Graph JSON"** to download the structured graph file.
10. **Ask Knowledge (`/ask`)**: Ask *"What is the value of the agreement and how many servers are included?"* Receive `INR 2.5 Crore` and `500 Dell PowerEdge servers` with evidence citations.
11. **"How did we get this answer?"**: Expand the transparent audit trail showing Question Understanding → Entity Grounding → Graph Traversal → Evidence Assembly → Grounded Answer.
12. **Differences & Contradictions (`/contradictions`)**: See how the system distinguishes direct contradiction from **Partial Value** delivery (`Contract C001` ₹2.5 Cr commitment vs `Invoice INV-2026-034` ₹1.0 Cr batch 1 fulfillment). Click **"Confirm Partial Delivery Fulfillment"** to resolve it with human audit notes.
13. **Architecture (`/architecture`)**: Present the 8-stage hybrid paradigm breakdown highlighting `[Deterministic]`, `[AI]`, and `[Hybrid]` execution stages.

---

## 7. Sample Documents Included

The repository contains real sample files in `sample_documents/`:
- `Contract_001.pdf` & `Contract_001.txt`: Master Hardware Supply Agreement between ABC Technologies Pvt. Ltd. and XYZ Corporation covering 500 Dell PowerEdge servers worth INR 2.5 Crore.
- `Invoice_034.pdf` & `Invoice_034.txt`: Tax Invoice for partial delivery batch 1 (200 Dell PowerEdge servers) totaling INR 1.0 Crore.