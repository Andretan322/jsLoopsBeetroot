'use strict';

function range() {
    const start = +prompt("Type first number");
    const end = +prompt("Type second number");
    let sum = 0;

    let from, to;

    if (end < start) {
        from = end;
        to = start;

        sum = (from + to) / 2 * (end - start + 1);
    } else {
        sum = (start + end) / 2 * (end - start + 1);
    }

    alert(sum);
}
