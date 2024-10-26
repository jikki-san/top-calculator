let a, b, op;
let displayValue = "";
let prevButton = "";

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
  if (b === 0) {
    return "BRUH";
  }
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
  }
}

function dispatchDisplayUpdate() {
  const displayUpdateEvent = new Event("displayUpdate");
  display.dispatchEvent(displayUpdateEvent);
}

function handleDigitClicked(event) {
  const button = event.target;
  displayValue += button.textContent;
  prevButton = button.textContent;
  dispatchDisplayUpdate();
}

function handleOperationClicked(event) {
  if ("+_*/c".includes(prevButton)) {
    return;
  }
  const button = event.target;
  if (prevButton === "=") {
    op = button.textContent;
    prevButton = button.textContent;
    displayValue = "";
    return;
  }
  if (a && !b) {
    b = +displayValue;
  }
  if (a && b) {
    const result = operate(a, b, op);
    displayValue = result;
    dispatchDisplayUpdate();
  }
  a = +displayValue;
  displayValue = "";
  op = button.textContent;
  prevButton = button.textContent;
}

function handleClearClicked() {
  displayValue = "";
  a = undefined;
  b = undefined;
  op = undefined;
  dispatchDisplayUpdate();
  prevButton = "c";
}

function handleEqualsClicked() {
  if (!a || prevButton === "=") {
    return;
  }
  b = +displayValue;
  const result = operate(a, b, op);
  a = result;
  b = undefined;
  displayValue = result;
  prevButton = "=";
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
