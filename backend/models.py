from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field

class Entity(BaseModel):
    id: str
    name: str
    type: str  # Organization, Person, Product, Contract, Invoice, Location, Date, Money
    mentions_count: int = 1
    linked_entity_id: Optional[str] = None  # e.g. ORG-1024 or None if Unmatched
    linked_entity_name: Optional[str] = None
    confidence: float = 0.95
    status: str = "Verified"  # Verified, Needs Review, Unmatched
    source_doc_id: str
    source_doc_name: str
    source_page: int = 1
    evidence_text: str = ""
    properties: Dict[str, Any] = Field(default_factory=dict)

class Relationship(BaseModel):
    id: str
    source_entity_id: str
    source_entity_name: str
    target_entity_id: str
    target_entity_name: str
    relation_type: str  # SIGNED, PURCHASED, SUPPLIES, CONTAINS, HAS_VALUE, STARTS_ON, EXPIRES_ON, ISSUED_BY, BILLED_TO, CEO_OF
    confidence: float = 0.95
    status: str = "Supported"  # Supported, Uncertain, Unsupported, Disputed
    evidence_text: str = ""
    source_doc_id: str
    source_doc_name: str
    source_page: int = 1
    warning: Optional[str] = None

class Fact(BaseModel):
    id: str
    subject_id: str
    subject_name: str
    predicate: str
    value: str
    confidence: float = 0.98
    status: str = "Confirmed Fact"  # Confirmed Fact, Possible, Contradictory, Unsupported
    evidence_text: str = ""
    source_doc_id: str
    source_doc_name: str
    source_page: int = 1

class Evidence(BaseModel):
    id: str
    fact_id: Optional[str] = None
    relationship_id: Optional[str] = None
    text: str
    source_doc_id: str
    source_doc_name: str
    source_page: int = 1
    evidence_type: str = "Direct Statement"  # Direct Statement, Inferred, Tabular Data
    confidence: float = 0.98
    status: str = "Supported"
    context_before: str = ""
    context_after: str = ""

class Document(BaseModel):
    id: str
    filename: str
    file_type: str  # PDF, DOCX, TXT
    file_size: str = "240 KB"
    uploaded_at: str = "2026-03-29"
    status: str = "Completed"  # Processing, Completed, Needs Review, Failed
    pages_count: int = 4
    chunks_count: int = 18
    entities_count: int = 8
    relationships_count: int = 6
    facts_count: int = 10
    confidence_score: float = 0.96
    needs_review_count: int = 0
    text_content: str = ""
    pages: List[Dict[str, Any]] = Field(default_factory=list)
    summary: str = ""

class ReviewItem(BaseModel):
    id: str
    category: str  # Unmatched, Low Confidence, Contradiction, Ambiguous Relationship
    title: str
    extracted_text: str
    possible_match: Optional[str] = None
    match_id: Optional[str] = None
    similarity: Optional[float] = None
    confidence: float
    warning: Optional[str] = None
    evidence: str
    source_doc: str
    source_page: int = 1
    status: str = "Pending"  # Pending, Approved, Rejected, Resolved

class ContradictionItem(BaseModel):
    id: str
    title: str
    subject: str
    property_name: str
    difference_type: str = "Contradiction"  # Contradiction, Partial Value, Contextual Variance, Insufficient Evidence
    interpretation: Optional[str] = None
    doc_a_id: str
    doc_a_name: str
    doc_a_value: str
    doc_a_evidence: str
    doc_b_id: str
    doc_b_name: str
    doc_b_value: str
    doc_b_evidence: str
    status: str = "Needs Human Review"  # Needs Human Review, Resolved Doc A, Resolved Doc B, Unresolved, Confirmed Partial Delivery
    resolution_note: Optional[str] = None

class QueryRequest(BaseModel):
    query: str

class PipelineStep(BaseModel):
    step: int
    name: str
    description: str
    detail: str

class QueryResponse(BaseModel):
    query: str
    answer: str
    confidence: float
    pipeline_steps: List[PipelineStep]
    matched_entities: List[Dict[str, Any]]
    matched_facts: List[Dict[str, Any]]
    evidence_citations: List[Dict[str, Any]]

class SemanticType(BaseModel):
    id: str
    name: str
    color: str
    description: str
    properties: List[str]
    allowed_relationships: List[Dict[str, str]]
    examples: List[str]
    instances_count: int

class SettingsModel(BaseModel):
    extraction_model: str = "Prototype Extraction Engine (v2.4)"
    confidence_threshold: float = 0.80
    entity_resolution_threshold: float = 0.90
    automatic_extraction: bool = True
    human_review_enabled: bool = True
    evidence_tracking_enabled: bool = True
    strict_hallucination_guardrails: bool = True
