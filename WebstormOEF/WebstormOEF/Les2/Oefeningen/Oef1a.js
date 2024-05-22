const prompt = require('prompt-sync')();
function minimum(number1, number2)
{
    if (number1 > number2){
        return number2;
    }
    return number1;
}

console.log(minimum(Number(prompt("Geef een getal:")), Number(prompt("Geef een getal in:"))))


