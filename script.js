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

function performOperation(nextOperator) {
  const inputValue = parseFloat(currentInput);

  if (firstOperand === null && !isNaN(inputValue)) {
    firstOperand = inputValue;
  } else if (operator && !waitingForSecondOperand) {
    let result = 0;
    switch (operator) {
      case '+': result = firstOperand + inputValue; break;
      case '-': result = firstOperand - inputValue; break;
      case '*': result = firstOperand * inputValue; break;
      case '/': result = firstOperand / inputValue; break;
    }

    const historyEntry = `${firstOperand} ${operator} ${inputValue} = ${result}`;
    calculationHistory.push(historyEntry);

    currentInput = String(result);
    firstOperand = result;
    updateHistory();
  }

  operator = nextOperator;
  waitingForSecondOperand = true;
  updateDisplay();
}

const updateHistory = function () {
  historyDiv.innerHTML = '<h3>Calculation History</h3>';
  for (const entry of calculationHistory) {
    const p = document.createElement('p');
    p.textContent = entry;
    historyDiv.appendChild(p);
  }
}

// Modify event listener
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
  } else {
    performOperation(value);
  }
});

