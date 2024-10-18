let a, b, op;
// TODO: add handler for last clicked value
let displayValue = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, op) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    // TODO: add a default case
  }
}

function dispatchDisplayUpdate() {
  const displayUpdateEvent = new Event("displayUpdate");
  display.dispatchEvent(displayUpdateEvent);
}

function handleDigitClicked(event) {
  const button = event.target;
  displayValue += button.textContent;
  dispatchDisplayUpdate();
}

function handleOperationClicked(event) {
  const button = event.target;
  // TODO: make sure multiple consecutive clicked ops is handled
  a = +displayValue;
  displayValue = "";
  op = button.textContent;
  // TODO: handle display/chain update if a is non-null
}

function handleClearClicked() {
  displayValue = "";
  dispatchDisplayUpdate();
}

function handleEqualsClicked() {
  b = +displayValue;
  displayValue = operate(a, b, op);
  dispatchDisplayUpdate();
}

function updateDisplay() {
  display.textContent = displayValue;
}

const digitsContainer = document.querySelector(".digits");
const opsContainer = document.querySelector(".operations");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const display = document.querySelector(".display");

digitsContainer.addEventListener("click", handleDigitClicked);
opsContainer.addEventListener("click", handleOperationClicked);
clear.addEventListener("click", handleClearClicked);
equals.addEventListener("click", handleEqualsClicked);
display.addEventListener("displayUpdate", updateDisplay);
