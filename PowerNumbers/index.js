'use strict';

function powerNumbers() {

    let text = document.getElementById("table");

    for (let i = 2; i <= 9; i++) {
        for (let n = 1; n <= 10; n++) {
            text.innerHTML += `${i} * ${n} = ${i * n}<br>`;
        }
        text.innerHTML += `<br>`
    }
}


// Second variant with two functions
let i = 2;

function getPow () {
    for(i; i < 10; i++) {
        pow()
    }
}

function pow() {
    for(let j = 1; j < 10; j++) {
        console.log(`${i}^${j} = ${Math.pow(i, j)} `);
    }
    console.log("");
}