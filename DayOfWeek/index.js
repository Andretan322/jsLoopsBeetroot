'use strict';

function days() {

    let repeat = true;
    let i = 0;

    do {
        const days = ["Sunday", "Monday", "Tuesday",
            "Wednesday", "Thursday", "Friday", "Saturday"];

        repeat = confirm(`${days[i]}\nDo you want to continue?`);
        i = ++i % days.length;
    } while (repeat)
}

