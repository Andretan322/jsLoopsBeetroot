'use strict';

function calculator() {

    let repeat = true;

    do {
        const askNumberOne = prompt("Type the number");
        const askNumberTwo = prompt("Type the number");
        const askSign = prompt("Type the sign");

        if (askSign == "+") {
            alert(askNumberOne + askNumberTwo);
        } else if (askSign == "-") {
            alert(askNumberOne - askNumberTwo);
        } else if (askSign == "*") {
            alert(askNumberOne * askNumberTwo);
        } else if (askSign == "/") {
            alert(askNumberOne / askNumberTwo);
        }

        //alert(eval(askNumberOne + askSign + askNumberTwo));

        repeat = confirm("Do you want to continue?");
    } while (repeat)


}

