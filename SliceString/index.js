'use strict';

function sliceString() {
    const number = prompt("Type the number");
    const shiftDigits = prompt("Enter the digit");

    let result = number.slice(shiftDigits) + number.slice(0, shiftDigits);
    alert(result);
}