let pyodide = null;
let editorInstance = null; 
let currentState = {
    scores: {}, 
    status: {}, 
    solutionViewed: {}, 
    currentQuestionId: null
};

const TOTAL_QUESTIONS = 30;
const POINTS_PER_QUESTION = 10;
const STORAGE_KEY = 'python_drills_state';

const app = document.getElementById('app');
const loadingOverlay = document.getElementById('loading-overlay');
const startBtn = document.getElementById('start-btn');
const loadingText = document.getElementById('loading-text');

const dashboardView = document.getElementById('dashboard-view');
const workspaceView = document.getElementById('workspace-view');

const globalProgressBar = document.getElementById('global-progress-bar');
const completionPercentage = document.getElementById('completion-percentage');
const totalScoreEl = document.getElementById('total-score');
const questionGrid = document.getElementById('question-grid');

const wsTitle = document.getElementById('ws-title');
const wsTimer = document.getElementById('ws-timer');
const showSolutionBtn = document.getElementById('show-solution-btn');
const wsDescription = document.getElementById('ws-description');
const testCasesTableBody = document.querySelector('#test-cases-table tbody');
const consoleOutput = document.getElementById('console-output');
const runBtn = document.getElementById('run-btn');
const backToDashboardBtn = document.getElementById('back-to-dashboard');

const completionModal = document.getElementById('completion-modal');
const finalScoreEl = document.getElementById('final-score');
const closeModalBtn = document.getElementById('close-modal-btn');

let timerInterval = null;

async function init() {
    loadState();
    
    startBtn.addEventListener('click', () => {
        loadingOverlay.style.display = 'none';
        showView('dashboard');
        renderDashboard();
    });

    backToDashboardBtn.addEventListener('click', () => {
        clearInterval(timerInterval);
        showView('dashboard');
        renderDashboard();
    });

    runBtn.addEventListener('click', runTests);
    
    showSolutionBtn.addEventListener('click', revealSolution);
    
    closeModalBtn.addEventListener('click', () => {
        completionModal.classList.add('hidden');
    });

    try {
        await Promise.all([
            loadPyodideEngine(),
            initMonacoEditor()
        ]);
        
        loadingText.textContent = "Engine & Editor Ready!";
        startBtn.disabled = false;
    } catch (err) {
        loadingText.textContent = "Failed to load resources. Please refresh.";
        console.error(err);
    }
}

async function loadPyodideEngine() {
    pyodide = await loadPyodide();
    await setupPythonEnv();
}

function initMonacoEditor() {
    return new Promise((resolve, reject) => {
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
            // Add basic Python Intellisense
            monaco.languages.registerCompletionItemProvider('python', {
                provideCompletionItems: function(model, position) {
                    var word = model.getWordUntilPosition(position);
                    var range = {
                        startLineNumber: position.lineNumber,
                        endLineNumber: position.lineNumber,
                        startColumn: word.startColumn,
                        endColumn: word.endColumn
                    };
                    var suggestions = [
                        { label: 'print', kind: monaco.languages.CompletionItemKind.Function, insertText: 'print(${1:object})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, documentation: 'Print objects to the text stream file' },
                        { label: 'len', kind: monaco.languages.CompletionItemKind.Function, insertText: 'len(${1:object})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, documentation: 'Return the number of items in a container' },
                        { label: 'input', kind: monaco.languages.CompletionItemKind.Function, insertText: 'input()', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, documentation: 'Read a string from standard input' },
                        { label: 'range', kind: monaco.languages.CompletionItemKind.Function, insertText: 'range(${1:stop})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet, documentation: 'Return an object that produces a sequence of integers' },
                        { label: 'def', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'def ${1:name}(${2:params}):\n\t', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet },
                        { label: 'if', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'if ${1:condition}:\n\t' },
                        { label: 'else', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'else:\n\t' },
                        { label: 'elif', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'elif ${1:condition}:\n\t' },
                        { label: 'for', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'for ${1:target} in ${2:iter}:\n\t', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet },
                        { label: 'while', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'while ${1:condition}:\n\t' },
                        { label: 'return', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'return ' },
                        { label: 'import', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'import ' },
                        { label: 'from', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'from ' },
                        { label: 'class', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'class ${1:Name}:\n\t', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet },
                        { label: 'True', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'True' },
                        { label: 'False', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'False' },
                        { label: 'None', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'None' },
                        { label: 'and', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'and ' },
                        { label: 'or', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'or ' },
                        { label: 'not', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'not ' },
                        { label: 'in', kind: monaco.languages.CompletionItemKind.Keyword, insertText: 'in ' },
                        { label: 'int', kind: monaco.languages.CompletionItemKind.Class, insertText: 'int(${1:x})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet },
                        { label: 'str', kind: monaco.languages.CompletionItemKind.Class, insertText: 'str(${1:object})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet },
                        { label: 'list', kind: monaco.languages.CompletionItemKind.Class, insertText: 'list(${1:iterable})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet },
                        { label: 'dict', kind: monaco.languages.CompletionItemKind.Class, insertText: 'dict()' },
                        { label: 'set', kind: monaco.languages.CompletionItemKind.Class, insertText: 'set()' },
                        { label: 'float', kind: monaco.languages.CompletionItemKind.Class, insertText: 'float(${1:x})', insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet }
                    ];
                    
                    // Add result to items
                    suggestions.forEach(item => item.range = range);
                    
                    return { suggestions: suggestions };
                }
            });

            editorInstance = monaco.editor.create(document.getElementById('monaco-editor-container'), {
                value: "# Write your Python code here\n",
                language: 'python',
                theme: 'vs-dark',
                automaticLayout: true,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 14,
                fontFamily: "'Fira Code', 'Courier New', monospace",
                suggest: {
                    showKeywords: true,
                    showSnippets: true
                }
            });
            resolve();
        }, (err) => reject(err));
    });
}

async function setupPythonEnv() {
    const setupCode = `
import sys
import builtins

class OutputCapture:
    def __init__(self):
        self.data = []
    def write(self, s):
        self.data.append(s)
    def flush(self):
        pass
    def get_value(self):
        return ''.join(self.data)

class InputMock:
    def __init__(self):
        self.inputs = []
    def set_inputs(self, input_list):
        self.inputs = input_list
    def mock_input(self, prompt=""):
        if self.inputs:
            return str(self.inputs.pop(0))
        raise Exception("Input requested but no input provided in test case.")

_output_capture = OutputCapture()
_input_mock = InputMock()

sys.stdout = _output_capture
builtins.input = _input_mock.mock_input
    `;
    await pyodide.runPythonAsync(setupCode);
}

function loadState() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        currentState = JSON.parse(stored);
    }
    QUESTIONS.forEach(q => {
        if (!currentState.status[q.id]) {
            currentState.status[q.id] = 'locked';
        }
    });
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
    updateGlobalStats();
}

function showView(viewName) {
    dashboardView.classList.add('hidden');
    workspaceView.classList.add('hidden');
    
    if (viewName === 'dashboard') dashboardView.classList.remove('hidden');
    if (viewName === 'workspace') {
        workspaceView.classList.remove('hidden');
        if (editorInstance) {
            setTimeout(() => editorInstance.layout(), 10);
        }
    }
}

function renderDashboard() {
    questionGrid.innerHTML = '';
    
    QUESTIONS.forEach(q => {
        const card = document.createElement('div');
        const status = currentState.status[q.id];
        const isSolved = status === 'solved';
        
        card.className = `question-card ${isSolved ? 'solved' : ''}`;
        card.innerHTML = `
            <div class="card-header">
                <span class="q-num">#${q.id}</span>
                <span class="q-check">✔</span>
            </div>
            <div class="card-title">${q.title}</div>
            <div class="card-status">${isSolved ? 'Solved' : 'Unsolved'}</div>
        `;
        
        card.addEventListener('click', () => loadQuestion(q.id));
        questionGrid.appendChild(card);
    });
    
    updateGlobalStats();
    checkCompletion();
}

function updateGlobalStats() {
    const solvedCount = Object.values(currentState.status).filter(s => s === 'solved').length;
    const totalPoints = Object.values(currentState.scores).reduce((a, b) => a + b, 0);
    const percent = Math.floor((solvedCount / TOTAL_QUESTIONS) * 100);
    
    completionPercentage.textContent = `${percent}%`;
    globalProgressBar.style.width = `${percent}%`;
    totalScoreEl.textContent = totalPoints;
}

function checkCompletion() {
    const solvedCount = Object.values(currentState.status).filter(s => s === 'solved').length;
    if (solvedCount === TOTAL_QUESTIONS) {
        const totalPoints = Object.values(currentState.scores).reduce((a, b) => a + b, 0);
        finalScoreEl.textContent = totalPoints;
        if (!sessionStorage.getItem('completionShown')) {
            completionModal.classList.remove('hidden');
            sessionStorage.setItem('completionShown', 'true');
        }
    }
}

function loadQuestion(id) {
    currentState.currentQuestionId = id;
    const q = QUESTIONS.find(q => q.id === id);
    if (!q) return;
    
    showView('workspace');
    
    wsTitle.textContent = `${q.id}. ${q.title}`;
    wsDescription.textContent = q.description;
    
    if (editorInstance) {
        editorInstance.setValue("# Write your solution for " + q.title + "\n");
        editorInstance.setScrollPosition({scrollTop: 0});
    }

    consoleOutput.textContent = 'Ready to run...';
    consoleOutput.className = '';
    
    renderTestCases(q);
    startTimer();
    
    showSolutionBtn.disabled = true;
    showSolutionBtn.textContent = 'Show Solution (Wait 10:00)';
    
    if (currentState.status[id] !== 'solved') {
        currentState.status[id] = 'attempted';
        saveState();
    }
}

function renderTestCases(question) {
    testCasesTableBody.innerHTML = '';
    // Show all tests, masking hidden ones
    question.testCases.forEach(tc => {
        const row = document.createElement('tr');
        const inputDisplay = tc.hidden ? "Hidden" : `<pre>${tc.input}</pre>`;
        const outputDisplay = tc.hidden ? "Hidden" : `<pre>${tc.output}</pre>`;
        
        row.innerHTML = `
            <td>${inputDisplay}</td>
            <td>${outputDisplay}</td>
            <td class="status-cell">-</td>
        `;
        testCasesTableBody.appendChild(row);
    });
}

function startTimer() {
    clearInterval(timerInterval);
    let timeLeft = 10 * 60; 
    
    updateTimerDisplay(timeLeft);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            enableSolutionBtn();
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    wsTimer.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function enableSolutionBtn() {
    showSolutionBtn.disabled = false;
    showSolutionBtn.textContent = 'Show Solution (-50% Points)';
}

function revealSolution() {
    const id = currentState.currentQuestionId;
    const q = QUESTIONS.find(q => q.id === id);
    
    if (confirm("Are you sure? This will halve the maximum points for this question.")) {
        if (editorInstance) {
            editorInstance.setValue(q.solution || "# Solution not found");
        }
        currentState.solutionViewed[id] = true;
        currentState.status[id] = 'attempted';
        saveState();
    }
}

async function runTests() {
    if (!currentState.currentQuestionId) return;
    
    runBtn.disabled = true;
    runBtn.textContent = 'Running...';
    consoleOutput.textContent = '';
    consoleOutput.className = '';
    
    const id = currentState.currentQuestionId;
    const q = QUESTIONS.find(q => q.id === id);
    const userCode = editorInstance ? editorInstance.getValue() : ""; 
    
    let allPassed = true;
    let failedMsg = "";
    
    try {
        for (let i = 0; i < q.testCases.length; i++) {
            const tc = q.testCases[i];
            const inputList = tc.input.toString().split('\n');
            const formattedInputs = inputList.map(s => s.trim());
            
            await pyodide.runPythonAsync(`_output_capture.data = []`);
            await pyodide.runPythonAsync(`_input_mock.set_inputs(${JSON.stringify(inputList)})`);
            
            await pyodide.runPythonAsync(userCode);
            
            let actualOutput = await pyodide.runPythonAsync(`_output_capture.get_value()`);
            actualOutput = actualOutput.trim();
            const expectedOutput = tc.output.trim();
            
            const passed = actualOutput === expectedOutput;
            
            // Update table status for ALL rows
            const row = testCasesTableBody.children[i]; 
            if(row) {
                const statusCell = row.querySelector('.status-cell');
                statusCell.textContent = passed ? 'Pass' : 'Fail';
                statusCell.className = `status-cell ${passed ? 'test-pass' : 'test-fail'}`;
            }
            
            if (!passed) {
                allPassed = false;
                if (tc.hidden) {
                    failedMsg += `Test Case ${i+1} (Hidden) Failed.\n\n`;
                } else {
                    failedMsg += `Test Case ${i+1} Failed.\nInput: ${tc.input}\nExpected: ${tc.output}\nActual: ${actualOutput}\n\n`;
                }
            }
        }
        
        if (allPassed) {
            consoleOutput.textContent = "All Test Cases Passed! Question Solved.";
            consoleOutput.className = "output-success";
            currentState.status[id] = 'solved';
            
            let points = POINTS_PER_QUESTION;
            if (currentState.solutionViewed[id]) {
                points = 5;
            }
            currentState.scores[id] = points;
            saveState();
            
        } else {
            consoleOutput.textContent = failedMsg;
            consoleOutput.className = "output-error";
        }
        
    } catch (err) {
        consoleOutput.textContent = "Error: " + err.message;
        consoleOutput.className = "output-error";
    } finally {
        runBtn.disabled = false;
        runBtn.textContent = '▶ Run Code';
    }
}

init();
