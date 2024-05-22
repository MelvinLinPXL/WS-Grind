const prompt = require ('prompt-sync')({});
console.log("Geef een getal");
let answer = prompt();
let theNumber = Number(answer);
//let theNumber = Number(prompt('Pick a number'));
console.log (`Your number is the square root${theNumber * theNumber}`);
