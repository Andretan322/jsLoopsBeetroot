'use strict';

function numberLength() {
    let number = prompt("Type the Number");
    number = String(Math.abs(number));
    alert(number.length);
}