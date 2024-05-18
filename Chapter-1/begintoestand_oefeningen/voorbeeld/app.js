const prompt = require('prompt-sync')();

function isEenGetal(number) {
    return !isNaN(parseInt(number));
}

let aantal = prompt('Geef het aantal sterren (0-9)');
while(!isEenGetal(aantal) || aantal < 0 || aantal >= 10   ){
    console.log("Foute ingave!")
    aantal = prompt('Geef het aantal sterren (0-9)');
}
aantal = parseInt(aantal);
console.log("*".repeat(aantal));
