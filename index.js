const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.buttons');

let currentNumber = '';
let firstNumber = null;
let operator = null;
let result = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    
    // Check for clear button
    if (buttonValue === 'C') {
      currentNumber = '';
      firstNumber = null;
      operator = null;
      result = null;
      display.textContent = '';
      return;
    }
    
    // Check for backspace button
    if (buttonValue === '←') {
      currentNumber = currentNumber.slice(0, -1);
      display.textContent = currentNumber;
      return;
    }
    
    // Check for decimal button
    if (buttonValue === '.') {
      if (currentNumber.includes('.')) {
        return;
      }
      
      if (currentNumber === '') {
        currentNumber += '0.';
      } else {
        currentNumber += '.';
      }
      
      display.textContent = currentNumber;
      return;
    }
    
    // Check for operator buttons
    if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      if (firstNumber === null) {
        firstNumber = parseFloat(currentNumber);
        currentNumber = '';
        operator = buttonValue;
        display.textContent = '';
      } else {
        const secondNumber = parseFloat(currentNumber);
        currentNumber = '';
        const result = calculate(firstNumber, secondNumber, operator);
        firstNumber = result;
        operator = buttonValue;
        display.textContent = '';
      }
      
      return;
    }
    
    // Check for equals button
    if (buttonValue === '=') {
      if (firstNumber === null) {
        return;
      }
      
      const secondNumber = parseFloat(currentNumber);
      currentNumber = '';
      result = calculate(firstNumber, secondNumber, operator);
      firstNumber = null;
      operator = null;
      display.textContent = result;
      
      return;
    }
    
    // If none of the above conditions are met, add the digit to the current number
    currentNumber += buttonValue;
    display.textContent = currentNumber;
  });
});

// Helper function to perform calculations
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}