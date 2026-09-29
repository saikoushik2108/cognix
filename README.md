# KnowFlow AI — Document-to-Knowledge Extraction Agent
> **Document Intelligence → Structured Knowledge**

KnowFlow AI is an evidence-backed document intelligence platform that extracts verified business entities, relationships, and structured facts from contracts, invoices, and organizational reports. It links information to an existing business semantic model, enforces strict anti-hallucination guardrails, and provides transparent question-answering with verbatim citation traceability.

---

## 1. Project Structure

```
cognix/
├── backend/
│   ├── .venv/                      # Python virtual environment (CPython 3.11)
│   ├── main.py                     # FastAPI application & REST endpoints
│   ├── models.py                   # Pydantic schemas (Document, Entity, Relationship, Fact, etc.)
│   ├── requirements.txt            # FastAPI, Uvicorn, PyMuPDF, python-docx, Pydantic
│   ├── data/
│   │   └── seed_data.py            # Master seed documents, entities, relations, facts, contradictions
│   └── services/
│       ├── ai_service.py           # Clean AI extraction & query reasoning service abstraction
│       └── document_parser.py      # PyMuPDF & python-docx file extraction service
├── frontend/
│   ├── index.html                  # HTML entrypoint with Plus Jakarta Sans & JetBrains Mono
│   ├── vite.config.js              # Vite config with /api proxy to backend (port 8000)
│   ├── package.json                # React 19, Vite, React Router, React Flow, Recharts, Lucide
│   └── src/
│       ├── main.jsx                # Application root
│       ├── App.jsx                 # React Router definitions for all 15 pages
│       ├── index.css               # Design system tokens, enterprise typography, light theme
│       ├── components/
│       │   ├── layout/
│       │   │   ├── AppShell.jsx    # Persistent layout with Header, Sidebar & Modals
│       │   │   ├── Header.jsx      # Global search, notifications popover, walk-through guide
│       │   │   └── Sidebar.jsx     # Collapsible navigation with badge counters
│       │   └── common/
│       │       ├── EntityBadge.jsx     # Color-coded badges for 8 entity types
│       │       ├── ConfidenceBadge.jsx # Verified (green), review (amber), flagged (red)
│       │       ├── KpiCard.jsx         # Metric card with icons and trends
│       │       ├── UploadModal.jsx     # Drag-and-drop file upload & Demo Document loader
│       │       ├── HelpModal.jsx       # 8-step jury walkthrough and feature overview
│       │       ├── EntityDrawer.jsx    # Slide-out drawer for entity schema & provenance
│       │       └── EvidenceDrawer.jsx  # Slide-out drawer for sentence quotations & context
│       ├── pages/
│       │   ├── DashboardPage.jsx            # Page 1: Enterprise intelligence dashboard
│       │   ├── DocumentsPage.jsx            # Page 2: Document management & dropzone
│       │   ├── DocumentProcessingPage.jsx   # Page 3: 8-stage interactive visual pipeline
│       │   ├── DocumentInspectorPage.jsx    # Page 4: 3-column grounded viewer with entity tags
│       │   ├── EntityExplorerPage.jsx       # Page 5: Searchable & sortable entity catalog
│       │   ├── RelationshipExplorerPage.jsx # Page 6: Triple cards with hallucination warnings
│       │   ├── FactExplorerPage.jsx         # Page 7: Structured fact table with evidence triggers
│       │   ├── EvidenceCenterPage.jsx       # Page 8: Verbatim sentence provenance center
│       │   ├── ReviewCenterPage.jsx         # Page 9: Human-in-the-loop review queue
│       │   ├── KnowledgeGraphPage.jsx       # Page 10: Interactive React Flow knowledge graph
│       │   ├── SemanticModelPage.jsx        # Page 11: Enterprise ontology schema explorer
│       │   ├── AskKnowledgePage.jsx         # Page 12: Natural language query & reasoning stepper
│       │   ├── ContradictionsPage.jsx       # Page 13: Side-by-side conflicting source resolver
│       │   ├── AnalyticsPage.jsx            # Page 14: Recharts telemetry & confidence breakdown
│       │   └── SettingsPage.jsx             # Page 15: AI engine & hallucination guardrails
│       └── services/
│           ├── aiService.js        # Client service abstraction connecting to /api with offline fallback
│           └── mockData.js         # Client dataset guarantee for presentation reliability
└── README.md
```

---

## 2. How to Run Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at `http://127.0.0.1:5173/`.

---

## 3. How to Run Backend

```bash
cd backend
# Create virtual environment and install requirements:
uv venv .venv
uv pip install -r requirements.txt

# Start FastAPI server on port 8000:
uv run uvicorn main:app --port 8000 --reload
```

The backend API will run at `http://127.0.0.1:8000/`.
Interactive OpenAPI docs are available at `http://127.0.0.1:8000/docs`.

---

## 4. Main Features Implemented

1. **Enterprise Dashboard**: Real-time KPI counters (128 documents, 2,481 entities, 4,820 relationships, 7,342 facts), extraction activity timelines, knowledge by category, and attention alerts.
2. **Document Management & Processing Pipeline**: Drag-and-drop upload zone supporting PDF, DOCX, and TXT, with a 1-click **"Try Demo Document"** action. Visualizes the 8-stage extraction pipeline with per-stage execution durations and logs.
3. **Document Inspector (3-Column Layout)**: Left column page navigation, center text viewer with interactive colored entity highlight chips, and right column grounded knowledge card.
4. **Knowledge Explorers**:
   - **Entity Explorer**: Search, filter by 8 semantic types, sort by mentions or confidence, and open slide-out inspection drawers.
   - **Relationship Explorer**: Visual triple flowcards with explicit distinctions between verified and unsupported relationships.
   - **Fact Explorer**: Structured subject-predicate-value table with **"View Evidence"** action.
5. **Evidence Center**: Displays verbatim quotation citations, surrounding sentence contexts, page numbers, and evidence type flags.
6. **Review Center (Human-in-the-Loop)**: Categorized review queue for unmatched entity linking (e.g., linking "ABC Technologies" to master record `ORG-1024` with 96% similarity) and low-confidence inferences.
7. **Strict Anti-Hallucination Guardrails**: Intentionally flags unsupported relationships (e.g. `John Smith → CEO_OF → ABC Technologies` with 61% confidence and warning: *"Document indicates Authorised Signatory, not Chief Executive Officer"*), allowing the user to reject the claim to preserve master graph integrity.
8. **Interactive React Flow Knowledge Graph**: Custom nodes, animated relationship edges, dashed red lines for unsupported inferences, zoom, pan, search, entity-type filters, and confidence cutoff slider.
9. **Semantic Model (Ontology)**: Interactive schema definition for Organization, Person, Product, Contract, Invoice, Location, Date, and Money, including allowed relationships and property constraints.
10. **Natural Language Querying ("Ask Knowledge")**:
    - Preloaded with prompt chips like *"What contracts does ABC Technologies have?"* or *"Who signed Contract C001?"*.
    - Features an expandable **"How did we get this answer?"** transparency stepper detailing Question Understanding → Entity Grounding → Graph Traversal → Evidence Assembly → Synthesized Answer.
11. **Contradiction Detection & Adjudication**: Side-by-side comparison of conflicting records (e.g., Contract C001 Expiry Date: 15 March 2028 in original agreement vs June 2028 in fiscal report) with human adjudication actions.
12. **Analytics**: Rich Recharts visualizations for throughput trends, confidence histograms, category distribution, and review status.
13. **Global Search**: Search bar in header with keyboard shortcut (`Ctrl+K`) that searches across documents, entities, relationships, and facts.

---

## 5. Which Components are Mocked vs Real

| Component | Status | Implementation Details |
|---|---|---|
| **Document Processing (PDF/DOCX/TXT)** | **Real** | Uses `PyMuPDF` (`fitz`) for PDF vector text parsing, `python-docx` for Word documents, and UTF-8 stream decoding for TXT. |
| **Backend REST API** | **Real** | FastAPI with 18 endpoints, Pydantic validation, CORS middleware, and multipart file upload handling. |
| **Frontend UI/UX & React Flow Graph** | **Real** | Pure React 19, `@xyflow/react`, `recharts`, `lucide-react`, and vanilla CSS design system. |
| **Extraction AI Layer** | **Deterministic Mock / Regex Engine** | Structured behind a clean `AIService` abstraction returning typed JSON representations of entities, relationships, facts, and evidence. |
| **Semantic Matching & Graph Reasoning** | **Realistic Deterministic Heuristics** | Demonstrates entity resolution (linking to canonical IDs like `ORG-1024`), confidence scoring, and anti-hallucination flagging. |

---

## 6. How Real LLM Integration Can Be Added Later

The codebase was architected specifically so that integrating a real LLM API (OpenAI GPT-4o, Google Gemini 1.5, Anthropic Claude, or a local Ollama model) requires modifying **only** `backend/services/ai_service.py` without touching the frontend:

```python
# In backend/services/ai_service.py:
class AIService:
    def __init__(self, model_name="gpt-4o"):
        self.client = OpenAI()

    def extract_entities(self, document_text: str, doc_id: str, doc_name: str) -> List[Dict]:
        response = self.client.beta.chat.completions.parse(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "Extract named business entities grounded strictly in the provided text. Return verbatim sentence citations."},
                {"role": "user", "content": document_text}
            ],
            response_format=EntityExtractionSchema
        )
        return response.choices[0].message.parsed.entities
```

Because the frontend and backend communicate via standardized Pydantic data schemas, swapping in an LLM produces zero frontend regressions.

---

## 7. Short Architecture Explanation

```
[ Documents (PDF / DOCX / TXT) ]
                │
                ▼
[ Document Parser (PyMuPDF / python-docx) ]
                │
                ▼
[ Text Extraction & Chunking ]
                │
                ▼
[ AIService Abstraction ]
  ├── 1. Entity Extraction (NER)
  ├── 2. Relationship Extraction (Dependency Parsing)
  ├── 3. Fact Extraction (Triples)
  ├── 4. Evidence Attachment (Offsets & Page Citations)
  ├── 5. Confidence Scoring & Hallucination Guardrails
  └── 6. Entity Resolution (Ontology Grounding)
                │
                ▼
[ Knowledge Store / FastAPI API Endpoints ]
                │
  ┌─────────────┼───────────────┐
  ▼             ▼               ▼
[ Knowledge   [ Review Center   [ Ask Knowledge ]
   Graph ]    (Human Gate) ]     (Evidence-backed QA)
```

---

## 8. How the Prototype Solves the Problem Statement

1. **Distinguishes Confirmed Facts vs Inferences**: Confirmed facts are strictly supported by sentence citations; unsupported inferences (such as assuming an executive's title) are prominently flagged as **"Unsupported"** with hallucination warnings.
2. **Source Provenance Guaranteed**: Every extracted entity, relationship, and fact contains document name and page number citations with a verbatim quotation.
3. **Semantic Model Grounding**: Resolves ambiguous or partial mentions (e.g. "ABC Technologies") to master enterprise identifiers (`ORG-1024`), while keeping ungrounded items in a human review queue.
4. **Transparent Question Answering**: Answers natural language inquiries accompanied by an auditable pipeline stepper (*Question Understanding → Entity Grounding → Knowledge Retrieval → Evidence Collection → Answer Generation*).
5. **Human-in-the-Loop Control**: Conflicting claims across documents are isolated in the Contradictions Resolver, ensuring AI never arbitrarily decides which contradictory business contract is correct.