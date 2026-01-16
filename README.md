# Python Logic Drills 🐍

A fully client-side Single Page Application (SPA) for practicing Python coding logic. Powered by [Pyodide](https://pyodide.org/) (WebAssembly) and [Monaco Editor](https://microsoft.github.io/monaco-editor/), this app provides a robust, offline-capable coding environment directly in your browser.

## 🚀 Features

*   **Browser-Based Execution**: Runs Python code locally using WebAssembly (no backend required).
*   **30 Logic Puzzles**: A curated list of algorithmic challenges ranging from basic to intermediate.
*   **Interactive Workspace**:
    *   **Monaco Editor**: Professional-grade editor with Python Intellisense, syntax highlighting, and auto-formatting.
    *   **Real-time Output**: Custom stdout capture and input mocking for interactive testing.
    *   **Test Case Validation**: Automated visible and hidden test cases for each question.
*   **Progress Tracking**: Persists solved questions and scores via LocalStorage.
*   **Dark Mode**: Sleek, VS Code-inspired interface.

## 🛠️ Tech Stack

*   **Core**: HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Engine**: [Pyodide](https://pyodide.org/) (Python 3.11+ in WebAssembly)
*   **Editor**: [Monaco Editor](https://github.com/microsoft/monaco-editor) (The power behind VS Code)
*   **Styling**: Custom CSS (Flexbox/Grid, CSS Variables)

## 📦 How to Run

Since this project uses ES Modules and Web Workers (for Pyodide/Monaco), it is best run via a local server, though it may work directly in some browsers depending on security settings.

### Option 1: VS Code Live Server (Recommended)
1.  Open the project folder in VS Code.
2.  Install the "Live Server" extension.
3.  Right-click `index.html` and select "Open with Live Server".

### Option 2: Python Simple HTTP Server
If you have Python installed:
```bash
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

## 📂 Project Structure

*   `index.html`: Main application entry point and layout.
*   `script.js`: Core logic, state management, and Pyodide/Monaco integration.
*   `questions.js`: Dataset containing the 30 coding challenges and test cases.
*   `style.css`: Application styling and themes.

## 📝 License

Open Source. Feel free to use this for learning or educational purposes.
