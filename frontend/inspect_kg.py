import re

path = r"e:\cognix\frontend\src\pages\KnowledgeGraphPage.jsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Let's inspect the file structure
print("File length:", len(text))

