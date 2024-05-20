/*(6 extra) Schrijf een programma dat eerst een lijst van namen vraagt. De invoer stopt op
ingave ‘stop’. Vervolgens wordt een lijst met willekeurige combinaties gegenereerd waarin
beschreven wordt welke persoon een cadeau geeft aan welke persoon. Elke persoon geeft
en krijgt een cadeau. Er wordt voor gezorgd dat niemand een cadeau aan zichzelf geeft.
 */
const prompt = require('prompt-sync')();

let invoer = prompt("geef namen in schijf stop om te stoppen ");
//let lijstmetnamen = ["test" , "joe" ,"mart" , 'orsoor' ,'aaal'];
let lijstmetnamen = [];

while (invoer !== "stop"){
    lijstmetnamen.push(invoer);
    invoer = prompt("geef namen in schijf stop om te stoppen ");
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffleArray(lijstmetnamen);

for (let i = 0; i < lijstmetnamen.length; i++) {
    let giver = lijstmetnamen[i];
    let receiver = lijstmetnamen[(i + 1) % lijstmetnamen.length];
    console.log(`${giver} --> ${receiver}`);
}