const prompt = require('prompt-sync')();
let randomGetal = Math.floor(Math.random() * 10) + 1;
console.log(randomGetal);
let getal = Number(prompt("Geef een getal in tussen 1 en 10 "));
let teller = 0;
if (typeof getal == "number"){
    if (getal <= 10 && getal > 0){
        for (let i = 0; i < 2; i++) {
            if (getal !== randomGetal){
                getal = Number(prompt("Geef een getal in tussen 1 en 10 "));
            } else if (teller === 0) {
                console.log("Proficiat");
                teller++;
            }
        }
    }
}
if (getal !== randomGetal){
    console.log("Helaas pindakaas");
}




