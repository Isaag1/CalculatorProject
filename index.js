const buttons = document.querySelectorAll(".buttons");
const display = document.querySelector("#display");

let operand1 = null;
let operator = null;
let operand2 = null;

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonValue = event.target.innerText;
    const isNumber = !isNaN(buttonValue);
    
    if (isNumber) {
      if (operator === null) {
        if (operand1 === null) {
          operand1 = buttonValue;
        } else {
          operand1 += buttonValue;
        }
        display.innerText = operand1;
      } else {
        if (operand2 === null) {
          operand2 = buttonValue;
        } else {
          operand2 += buttonValue;
        }
        display.innerText = operand2;
      }
    } else if (buttonValue === "C") {
      operand1 = null;
      operator = null;
      operand2 = null;
      display.innerText = "";
    } else if (buttonValue === "=") {
      if (operator !== null && operand1 !== null && operand2 !== null) {
        const result = eval(`${operand1} ${operator} ${operand2}`);
        operand1 = result.toString();
        operator = null;
        operand2 = null;
        display.innerText = operand1;
      }
    } else {
      operator = buttonValue;
    }
  });
});
