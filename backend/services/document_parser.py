import io
from typing import List, Dict, Any

def extract_text_from_pdf(file_bytes: bytes) -> Dict[str, Any]:
    """Extract text and pages from a PDF file using PyMuPDF (fitz)."""
    try:
        import fitz  # PyMuPDF
        doc = fitz.open(stream=file_bytes, filetype="pdf")
        pages = []
        full_text = []
        for i, page in enumerate(doc):
            text = page.get_text()
            pages.append({
                "page_number": i + 1,
                "title": f"Page {i + 1}",
                "text": text.strip()
            })
            full_text.append(text)
        return {
            "success": True,
            "pages_count": len(pages),
            "pages": pages,
            "text": "\n\n".join(full_text)
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "pages_count": 1,
            "pages": [{"page_number": 1, "title": "Page 1", "text": ""}],
            "text": ""
        }

def extract_text_from_docx(file_bytes: bytes) -> Dict[str, Any]:
    """Extract text from a DOCX file using python-docx."""
    try:
        import docx
        doc = docx.Document(io.BytesIO(file_bytes))
        paragraphs = [p.text for p in doc.paragraphs if p.text.strip()]
        full_text = "\n\n".join(paragraphs)
        # Approximate pages (e.g. 400 words per page)
        words = full_text.split()
        page_size = 400
        page_chunks = [words[i:i + page_size] for i in range(0, max(len(words), 1), page_size)]
        pages = []
        for idx, chunk in enumerate(page_chunks):
            pages.append({
                "page_number": idx + 1,
                "title": f"Section {idx + 1}",
                "text": " ".join(chunk)
            })
        return {
            "success": True,
            "pages_count": max(len(pages), 1),
            "pages": pages,
            "text": full_text
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "pages_count": 1,
            "pages": [{"page_number": 1, "title": "Page 1", "text": ""}],
            "text": ""
        }

def extract_text_from_txt(file_bytes: bytes) -> Dict[str, Any]:
    """Extract text from plain text file."""
    try:
        text = file_bytes.decode('utf-8', errors='replace')
        return {
            "success": True,
            "pages_count": 1,
            "pages": [{"page_number": 1, "title": "Document Content", "text": text}],
            "text": text
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "pages_count": 1,
            "pages": [{"page_number": 1, "title": "Page 1", "text": ""}],
            "text": ""
        }
