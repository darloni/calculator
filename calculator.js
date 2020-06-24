let trackerText = [];
let num1 = ""
let num2 = ""
let operator = ""
const result = document.querySelector("#total");
const tracker = document.querySelector("#tracker");

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(operator, num1, num2) {
	num1 = num1 * 1;
	num2 = num2 * 1;
	if (operator == "+") {
		return add(num1, num2);
	} else if (operator == "-") {
		return subtract(num1, num2);
	} else if (operator == "*") {
		return multiply(num1, num2);
	} else if (operator == "/") {
		return divide(num1, num2);
	}
}

function trackerReel(inputs) {
	let trackerUpdate = ""
	for (let i = 0; i < inputs.length; i++) {
		if (trackerUpdate.length > 0) {
			if (isNaN(inputs[i])) {
				trackerUpdate += " " + inputs[i] + " ";
			} else {
				trackerUpdate += inputs[i];
			}
		} else {
			trackerUpdate += inputs[i];
		}
	}
	tracker.textContent = trackerUpdate;
}

function equals() {
	if (num2.length == 0) {
		alert("You must enter a valid calculation!");
		return;
	}
	let resultText = operate(operator, num1, num2);
	resultText = resultText.toFixed(2);
	resultText = `${resultText}`;
	
	let decimal = 0;
	for (i = resultText.indexOf(".") + 1; i < resultText.length; i++) { //Check if there is a need to display decimal places
		 decimal += resultText[i] * 1;
	
	if (decimal == 0) { //If all of the decimals are 0 remove decimal places
		resultText = resultText.slice(0, resultText.length - 3);
	}
}
		
	result.textContent = resultText;
	num1 = resultText;
	num2 = "";
	operator = "";
}

function clear() {
	num1 = "";
	num2 = "";
	operator = "";
	result.textContent = "";
	tracker.textContent = "";
	trackerText = [];
}

function calculateInput(input) {
	if (isNaN(input)) {
		if (input == "=") {
			equals();
		} else if (input == "Clr") {
			clear();
		} else if (operator.length == 0) {
			operator = input;
		} else {
			equals();
			operator = input;
		}
	} else if (operator.length == 0) {
		num1 += input;
	} else {
		num2 += input;
	}
}

function getInput() {
	trackerText.push(this.textContent);
	trackerReel(trackerText);	
	calculateInput(this.textContent);
}
	

let inputs = document.querySelectorAll("button");
inputs.forEach(input => input.addEventListener('click', getInput));
