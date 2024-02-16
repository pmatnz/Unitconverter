/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convert = document.getElementById("convert-btn");
let userInput = document.getElementById("input-box");

const lengthValue = document.getElementById("lengthText");
const volumeValue = document.getElementById("volumeText");
const massValue = document.getElementById("massText");

// 1 foot = 0.3048 metres, 1 metre = 0.3048 feet
function lengthfeet() {
	return `${userInput.value} metres = ${
		Math.floor(3.2808 * 1000) / 1000
	} feet | ${userInput.value} feet = ${
		Math.floor(0.3048 * 1000) / 1000
	} metres`;
}

// 1 litre = 0.2642 gallons, 1 gallons = 3.7854 litres
function volumeLitres() {
	return `${userInput.value} litres = ${
		Math.floor(0.2642 * 1000) / 1000
	} gallons | ${userInput.value} gallons = ${
		Math.floor(3.7854 * 1000) / 1000
	} litres`;
}

function masskilos() {
	return `${userInput.value} kilos = ${
		Math.floor(2.2046 * 1000) / 1000
	} pounds | ${userInput.value} pounds = ${
		Math.floor(0.45359 * 1000) / 1000
	} kilos`;
}

convert.addEventListener("click", function () {
	let testVar = Number(userInput.value);
	lengthValue.textContent = lengthfeet(testVar);
	volumeValue.textContent = volumeLitres(testVar);
	massValue.textContent = masskilos(testVar);
});
