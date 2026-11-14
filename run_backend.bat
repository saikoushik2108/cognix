@echo off
setlocal
cd /d "%~dp0"
set "PYTHONPATH=%~dp0backend\.venv\Lib\site-packages;%~dp0backend"

set "PY_EXE=%~dp0backend\.venv\Scripts\python.exe"
if exist "C:\Users\saiko\AppData\Roaming\uv\python\cpython-3.11-windows-x86_64-none\python.exe" (
    set "PY_EXE=C:\Users\saiko\AppData\Roaming\uv\python\cpython-3.11-windows-x86_64-none\python.exe"
)

echo Starting Cognix Backend on http://127.0.0.1:8000 ...
"%PY_EXE%" -m uvicorn main:app --app-dir backend --host 127.0.0.1 --port 8000 --reload
