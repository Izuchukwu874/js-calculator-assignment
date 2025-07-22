 // Variables
let currentInput = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

const calculationHistory = [];

// Reset calculator
function clearCalculator() {
  currentInput = '0';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
}

// Append a number
const appendNumber = function (number) {
  if (waitingForSecondOperand) {
    currentInput = String(number);
    waitingForSecondOperand = false;
  } else {
    currentInput = currentInput === '0' ? String(number) : currentInput + number;
  }
}

// Update the display
const updateDisplay = () => {
  document.getElementById('display').value = currentInput;
}

const display = document.getElementById('display');
const buttonsContainer = document.getElementById('buttons-container');
const historyDiv = document.getElementById('history');

// Initial state
clearCalculator();
updateDisplay();

// Event delegation
buttonsContainer.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.matches('button')) return;

  const value = target.textContent;

  if (!isNaN(value)) {
    appendNumber(value);
    updateDisplay();
  } else if (value === 'C') {
    clearCalculator();
    updateDisplay();
  }
});

