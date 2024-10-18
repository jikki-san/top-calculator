let a = 0;
let b = 0;
let op = "+";
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

function handleClearClicked() {
  displayValue = "";
  dispatchDisplayUpdate();
}

function updateDisplay() {
  display.textContent = displayValue;
}

const digitsContainer = document.querySelector(".digits");
const clearButton = document.querySelector("#clear");
const display = document.querySelector(".display");

digitsContainer.addEventListener("click", handleDigitClicked);
clearButton.addEventListener("click", handleClearClicked);
display.addEventListener("displayUpdate", updateDisplay);
