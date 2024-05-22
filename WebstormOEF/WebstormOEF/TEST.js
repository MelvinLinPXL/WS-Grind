'use strict';
let prompt = require('prompt-sync')();

function validateInput(str){
    str = str.replace("<script>", "");
    let output = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "\'" && str[i] !== "\""){
            output += str[i];
        }
    }
    return output;
}

let input = "\'<script>alert(test)</script>@gmail.com\"";
console.log(validateInput(input));