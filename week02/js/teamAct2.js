// write a function to read user input
function readInput(e) {
  e.preventDefault();

  let name = document.querySelector("#name").value;
  let output = (document.querySelector("#output").textContent = name);
}

let button = document.querySelector("button");

button.addEventListener("click", readInput);


// write a function that adds numbers
function sumTo(e) {
  e.preventDefault();

  let numInput = document.querySelector('#num').value;
  let sum = 0;

  // add up the values
  while (numInput != 0) {
    sum = sum + parseInt(numInput);
    numInput--;
  }

  let sumDiv = document.querySelector('#sumTo').textContent = sum;
  return sum;
}

let button2 = document.querySelectorAll('button')[1];

button2.addEventListener('click', sumTo);

// write a function to add up the inputs of 2 and 3
function sumNumbers(event) {
  event.preventDefault();
  let num1 = sumTo(event);
  let num2 = document.querySelector('#sum').value;

  let result = num1 + parseInt(num2); 

  let outputDiv = document.querySelector('#addNumbers').textContent = result;
}

let button3 = document.querySelectorAll('button')[2];

button3.addEventListener('click', sumNumbers);