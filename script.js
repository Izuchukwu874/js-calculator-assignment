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

