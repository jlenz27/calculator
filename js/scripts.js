// business logic
function add(number1, number2) {
  const result = number1 + number2;
  const newResult = number1 + "+" + number2 +"=" + result;
  return newResult;
}

function subtract(number1, number2) {
  const result = number1 - number2;
  const newResult = number1 + "-" + number2 +"=" + result;
  return newResult;
}

function divide(number1, number2) {
  const result = number1 / number2;
  const newResult = number1 + "/" + number2 +"=" + result;
  return newResult;

}

function multiply(number1, number2) {
  const result = number1 * number2;
  const newResult = number1 + "*" + number2 +"=" + result;
  return newResult;
}

// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

// window.alert(add(number1, number2));
// window.alert(subtract(number1, number2));
// window.alert(divide(number1, number2));
// window.alert(multiply(number1, number2));

// window.alert(add(number1, number2)+ "\n" + subtract (number1, number2) + "\n" + divide (number1, number2) + "\n" + multiply (number1, number2));

window.alert(add(number1, number2)+ ", " + subtract (number1, number2) + ", " + divide (number1, number2) + ", " + multiply (number1, number2));