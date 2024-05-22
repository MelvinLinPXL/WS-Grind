'use strict';
let prompt = require('prompt-sync')();

function validateInput(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "l"){
            return false;
        }
    }
    return true;
}

let userInput = "ta\u006C\u006CRobot(26166)";
if (validateInput(userInput)) {
    politeHuman(userInput);
} else {
    console.log(true);
}