'use strict';

function max() {
    let numberOne = +prompt("Type the first number");
    let numberTwo = +prompt("Type the second number");

    numberOne = Math.abs(numberOne);
    numberTwo = Math.abs(numberTwo);

    while (numberOne != 0 && numberTwo != 0) {
        if (numberOne > numberTwo) {
            numberOne = numberOne % numberTwo;
        } else {
            numberTwo = numberTwo % numberOne;
        }
    }
    alert(numberOne + numberTwo);
}

function allDividers() {
    let number = +prompt("Type the number");

    number = Math.abs(number);
    let result = "";

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            result = result + `${i}, `;
        }
    }

    alert(result);
}