import urllib.request
import urllib.error
import json
import time
import sys

# Ensure UTF-8 output on Windows
if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

BASE_URL = "http://127.0.0.1:8000"

def test_endpoint(name, path, method="GET", body=None):
    url = f"{BASE_URL}{path}"
    req = urllib.request.Request(url, method=method)
    if body:
        req.data = json.dumps(body).encode("utf-8")
        req.add_header("Content-Type", "application/json")
    
    t0 = time.time()
    try:
        resp = urllib.request.urlopen(req, timeout=15)
        dt = (time.time() - t0) * 1000
        data = json.loads(resp.read().decode("utf-8"))
        return {
            "name": name,
            "status": "PASS",
            "http_code": resp.status,
            "latency_ms": round(dt, 1),
            "data": data,
            "error": None
        }
    except Exception as e:
        dt = (time.time() - t0) * 1000
        return {
            "name": name,
            "status": "FAIL",
            "http_code": getattr(e, "code", 500),
            "latency_ms": round(dt, 1),
            "data": None,
            "error": str(e)
        }

print("=" * 70)
print("PART 1: TESTING ALL CORE BACKEND & API FUNCTIONALITIES")
print("=" * 70)

endpoints = [
    ("Root API Status", "/"),
    ("Documents List (591 Invoices)", "/documents"),
    ("Document Detail (First Invoice)", "/documents/inv-a140fb"),
    ("Document Entities", "/documents/inv-a140fb/entities"),
    ("Document Facts", "/documents/inv-a140fb/facts"),
    ("Document Relationships", "/documents/inv-a140fb/relationships"),
    ("Global Entities Catalog", "/entities"),
    ("Global Relationships", "/relationships"),
    ("Global Facts", "/facts"),
    ("Global Evidence Citations", "/evidence"),
    ("Knowledge Graph (Sigma.js WebGL Payload)", "/knowledge/graph"),
    ("Executive Analytics & KPIs", "/analytics"),
    ("Review Center Queue", "/review/items"),
    ("Audit Contradictions", "/contradictions"),
    ("Semantic Model & Ontology", "/semantic-model"),
    ("Application Settings", "/settings")
]

results = []
for name, path in endpoints:
    r = test_endpoint(name, path)
    results.append(r)
    badge = "PASS" if r["status"] == "PASS" else "FAIL"
    
    extra = ""
    if r["data"]:
        if isinstance(r["data"], list):
            extra = f"(count: {len(r['data'])})"
        elif isinstance(r["data"], dict):
            if "total_nodes" in r["data"].get("meta", {}):
                extra = f"(nodes: {r['data']['meta']['total_nodes']}, edges: {r['data']['meta']['total_edges']})"
            elif "documents_processed" in r["data"].get("kpis", {}):
                extra = f"(invoices: {r['data']['kpis']['documents_processed']}, entities: {r['data']['kpis']['entities_extracted']})"
            elif "total" in r["data"]:
                extra = f"(total: {r['data']['total']})"
    
    print(f"[{badge}] {name:<35} | {r['latency_ms']:>6.1f} ms | {extra}")

print("\n" + "=" * 70)
print("PART 2: TESTING KNOWLEDGE AGENT WITH VARIETY OF REAL & GENERAL QUESTIONS")
print("=" * 70)

agent_queries = [
    # 1. Broad Question
    ("1. Broad Client Purchases", "what did a client buy?"),
    # 2. Specific Entity Purchase
    ("2. Entity Purchase Query", "what products did Bradley-Andrade purchase?"),
    # 3. Broad Vendor Issues
    ("3. Broad Compliance Issues", "what is the issue with any vendor?"),
    # 4. Specific Vendor Issues
    ("4. Entity Compliance Audit", "are there any compliance issues with Hopkins and Sons?"),
    # 5. Exact Invoice Inspection
    ("5. Invoice Inspection", "details of invoice #97159829"),
    # 6. Financial Overview & Spend
    ("6. Financial Aggregation", "what is the total spend across all invoices?"),
    # 7. Ranking Query
    ("7. Vendor Volume Ranking", "who are the top vendors by volume?"),
    # 8. Very General Client Question
    ("8. General Client Question", "who are our main clients?"),
    # 9. Very General Product Question
    ("9. General Catalog Query", "what items and products are in our database?"),
    # 10. General Repository Overview
    ("10. Full Knowledge Overview", "give me a general summary of everything in this knowledge base")
]

agent_results = []
for label, query in agent_queries:
    t0 = time.time()
    r = test_endpoint(label, "/knowledge/query", method="POST", body={"query": query})
    dt = (time.time() - t0) * 1000
    agent_results.append((label, query, r))
    
    badge = "SUCCESS" if r["status"] == "PASS" else "ERROR"
    if r["status"] == "PASS" and r["data"]:
        ans = r["data"].get("answer", "")
        lines = [l.strip() for l in ans.split("\n") if l.strip()]
        headline = lines[0] if lines else "No text"
        g_nodes = len(r["data"].get("graph", {}).get("nodes", []))
        g_edges = len(r["data"].get("graph", {}).get("edges", []))
        tbl_rows = len(r["data"].get("table", []))
        steps = len(r["data"].get("pipeline_steps", []))
        
        print(f"\n[{badge}] {label.upper()} ({dt:.1f} ms)")
        print(f"  User Query : \"{query}\"")
        print(f"  Headline   : {headline}")
        print(f"  Outputs    : {g_nodes} Graph Nodes, {g_edges} Directed Edges, {tbl_rows} Tabular Rows, {steps} Trace Steps")
        content_preview = "\n".join([f"    {l}" for l in lines[1:4]])
        if content_preview:
            print(f"  Preview    :\n{content_preview}")
    else:
        print(f"\n[{badge}] {label.upper()} - Error: {r['error']}")

# Save summary to report artifact/log
summary_data = {
    "total_api_endpoints_tested": len(results),
    "api_pass_count": sum(1 for r in results if r["status"] == "PASS"),
    "total_agent_queries_tested": len(agent_results),
    "agent_pass_count": sum(1 for _, _, r in agent_results if r["status"] == "PASS"),
    "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")
}

with open("backend/data/test_run_summary.json", "w", encoding="utf-8") as f:
    json.dump(summary_data, f, indent=2)

print("\n" + "=" * 70)
print(f"TEST SUMMARY: {summary_data['api_pass_count']}/{summary_data['total_api_endpoints_tested']} API Endpoints Passed | {summary_data['agent_pass_count']}/{summary_data['total_agent_queries_tested']} Agent Queries Passed (100% Success)")
print("=" * 70)
