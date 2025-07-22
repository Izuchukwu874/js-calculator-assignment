 
let currentInput = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

const calculationHistory = [];


function clearCalculator() {
  currentInput = '0';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
}


const appendNumber = function (number) {
  if (waitingForSecondOperand) {
    currentInput = String(number);
    waitingForSecondOperand = false;
  } else {
    currentInput = currentInput === '0' ? String(number) : currentInput + number;
  }
}

const updateDisplay = () => {
  document.getElementById('display').value = currentInput;
}

const display = document.getElementById('display');
const buttonsContainer = document.getElementById('buttons-container');
const historyDiv = document.getElementById('history');


clearCalculator();
updateDisplay();


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

class Calculator {
  constructor(displayElement, historyElement) {
    this.displayElement = displayElement;
    this.historyElement = historyElement;
    this.clearCalculator();
  }

  clearCalculator() {
    this.currentInput = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
    this.calculationHistory = [];
  }

  appendNumber(number) {
    if (this.waitingForSecondOperand) {
      this.currentInput = String(number);
      this.waitingForSecondOperand = false;
    } else {
      this.currentInput = this.currentInput === '0' ? String(number) : this.currentInput + number;
    }
  }

  updateDisplay() {
    this.displayElement.value = this.currentInput;
  }

  updateHistory() {
    this.historyElement.innerHTML = '<h3>Calculation History</h3>';
    for (const entry of this.calculationHistory) {
      const p = document.createElement('p');
      p.textContent = entry;
      this.historyElement.appendChild(p);
    }
  }

  performOperation(nextOperator) {
    const inputValue = parseFloat(this.currentInput);
    if (this.firstOperand === null && !isNaN(inputValue)) {
      this.firstOperand = inputValue;
    } else if (this.operator && !this.waitingForSecondOperand) {
      let result = 0;
      switch (this.operator) {
        case '+': result = this.firstOperand + inputValue; break;
        case '-': result = this.firstOperand - inputValue; break;
        case '*': result = this.firstOperand * inputValue; break;
        case '/': result = this.firstOperand / inputValue; break;
      }

      const historyEntry = `${this.firstOperand} ${this.operator} ${inputValue} = ${result}`;
      this.calculationHistory.push(historyEntry);

      this.currentInput = String(result);
      this.firstOperand = result;
      this.updateHistory();
    }

    this.operator = nextOperator;
    this.waitingForSecondOperand = true;
    this.updateDisplay();
  }
}


const calculator = new Calculator(display, historyDiv);


buttonsContainer.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.matches('button')) return;
  const value = target.textContent;

  if (!isNaN(value)) {
    calculator.appendNumber(value);
    calculator.updateDisplay();
  } else if (value === 'C') {
    calculator.clearCalculator();
    calculator.updateDisplay();
    calculator.updateHistory();
  } else {
    calculator.performOperation(value);
  }
});

let historyClearTimerId;

this.performOperation = function(nextOperator) {
  const inputValue = parseFloat(this.currentInput);

  
  if (this.operator === '/' && inputValue === 0) {
    this.currentInput = 'Error: Division by zero';
    this.updateDisplay();
    this.clearCalculator();
    return;
  }

  if (this.firstOperand !== null && this.operator !== null && !this.waitingForSecondOperand) {
    
  }

  clearTimeout(historyClearTimerId);
  historyClearTimerId = setTimeout(() => {
    this.calculationHistory = [];
    this.updateHistory();
  }, 30000);
};

// Conceptual: Form libraries like Formik (React) or React Hook Form help manage complex forms.
// They offer easier state handling, automatic validation, and user-friendly error messages,
// which reduce manual code compared to vanilla JS.

