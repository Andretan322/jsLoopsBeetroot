'use strict';

function numberLength() {
    let number = prompt("Type the Number");
    number = String(Math.abs(number));
    alert(number.length);
}

function typeOfNumbers() {
    let positive = 0;
    let negative = 0;
    let odds = 0;
    let evens = 0;
    let zero = 0;

    for (let i = 1; i <= 10; i++) {
        const number = +prompt(`Type the number: ${i}`);

        if (number > 0) {
            positive = positive + 1;
        } else if (number < 0) {
            negative = negative + 1;
        } else if (number === 0) {
            zero = zero + 1;
        }

        if (number % 2) {
            evens = evens + 1;
        } else {
            odds = odds + 1;
        }
    }

    let message = `The count of positive: ${positive}\n
    The count of negative: ${negative}\n
    The count of zero's: ${zero}\n
    The count of odds: ${odds}\n
    The count of evens: ${evens}.`

    document.write(message);
}


