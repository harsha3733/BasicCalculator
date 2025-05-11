// Accessing HTML elements
const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.btn'));
const clearBtn = document.getElementById('clear');
const toggleBtn = document.getElementById('toggle');
const body = document.body;

// Function to update display
function updateDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to evaluate the expression
function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Adding event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;
        if (value === '=') {
            evaluateExpression();
        } else if (value === 'C') {
            clearDisplay();
        } else {
            updateDisplay(value);
        }
    });
});

// Toggle dark/light theme
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
