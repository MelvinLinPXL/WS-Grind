const prompt = require('prompt-sync')();
let char = "#";
let spaties = " ";
let aantalLijnen = 7;
let teller = 1;
let afdruk = "";
let indexInterval = 0;
const interval = 5;
let character;

for (let i = 0; i < aantalLijnen; i++) {
    for (let j = 0; j < aantalLijnen - i; j++) {
        afdruk += spaties;
    }
    for (let j = 0; j < teller; j++) {
        character = char;
        if (indexInterval % interval === 0){
            character = "@";
        }
        afdruk += character;
        indexInterval++;
    }
    teller += 2;
    console.log(afdruk);
    afdruk = "";
}