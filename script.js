let pyodide = null;
let editorInstance = null; 
let currentState = {
    scores: {}, 
    status: {}, 
    solutionViewed: {}, 
    currentQuestionId: null
};

const TOTAL_QUESTIONS = QUESTIONS.length;
const POINTS_PER_QUESTION = 10;
const ITEMS_PER_PAGE = 30;
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
let currentPage = 1;

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
        renderDashboard(); // Re-render to maintain current page state
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
    pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
    });
    await setupPythonEnv();
}

function initMonacoEditor() {
    return new Promise((resolve, reject) => {
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' }});
        require(['vs/editor/editor.main'], function() {
            editorInstance = monaco.editor.create(document.getElementById('monaco-editor-container'), {
                value: "# Write your Python code here\n",
                language: 'python',
                theme: 'vs-dark',
                automaticLayout: true,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontSize: 14,
                fontFamily: "'Fira Code', 'Courier New', monospace"
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
            // Little delay to ensure container is visible for layout
            setTimeout(() => editorInstance.layout(), 10);
        }
    }
}

function renderDashboard() {
    questionGrid.innerHTML = '';
    
    // Pagination Logic
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = startIdx + ITEMS_PER_PAGE;
    const pageQuestions = QUESTIONS.slice(startIdx, endIdx);
    
    pageQuestions.forEach(q => {
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
    
    renderPaginationControls();
    updateGlobalStats();
    checkCompletion();
}

function renderPaginationControls() {
    // Check if controls already exist, if so remove them to re-render or just clear grid which we did
    // We will append controls to questionGrid as a separate element or after it in the dashboard-view
    
    let paginationContainer = document.getElementById('pagination-controls');
    if (!paginationContainer) {
        paginationContainer = document.createElement('div');
        paginationContainer.id = 'pagination-controls';
        paginationContainer.className = 'pagination-container';
        dashboardView.querySelector('main').after(paginationContainer); // Place after the grid
    }
    
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(QUESTIONS.length / ITEMS_PER_PAGE);

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = `Page ${i}`;
        btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        btn.addEventListener('click', () => changePage(i));
        paginationContainer.appendChild(btn);
    }
}

function changePage(page) {
    currentPage = page;
    renderDashboard();
    window.scrollTo(0, 0);
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
                    failedMsg += `Test Case ${i+1} Failed.\nInput: ${tc.input}\nExpected: ${tc.output}\nActual:\n${actualOutput}\n\n`;
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
