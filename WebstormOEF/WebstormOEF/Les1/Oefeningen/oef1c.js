const prompt = require('prompt-sync')();
let char = "#";
let spaties = " ";
let aantalLijnen = 7;
let teller = 1;
let afdruk = "";

for (let i = 0; i < aantalLijnen; i++) {
    for (let j = 0; j < aantalLijnen - i; j++) {
        afdruk += spaties;
    }
    for (let j = 0; j < teller; j++) {
        afdruk += char;
    }
    teller += 2;
    console.log(afdruk);
    afdruk = "";
}