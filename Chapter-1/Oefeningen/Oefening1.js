/* Looping and if Conditions */

/*
(1.a) Schrijf een programma dat een driehoek in de console afdrukt. Maak gebruik van de
variabele aantalLijnen (let aantalLijnen = 7;)
 */

let aantalLijnen = 7;

for (let i = 1 ; i <= aantalLijnen; i++){
    let string ="";

    for (let j = 1; j <= i ; j++){
        string += "#";
    }
    console.log(string);
}
/*
(1.b) Zorg ervoor dat de driehoek ook gespiegeld afgedrukt wordt (door voldoende spaties in
de output te plaatsen)
*/

for ( let x = 7; x >= 1; x--){
    let another="";

    for (let i = 1; i < x; i++){
        another+=" ";
    }
    for (let j = 7; j >= x; j--){
        another += '#';
    }
    console.log(another)
}

/*
(1.c extra) Zorg ervoor dat de driehoek symmetrisch afgedrukt wordt.
*/

for ( let x = 7; x >= 1; x--){
    let another="";

    for (let i = 1; i < x; i++){
        another+=" ";
    }
    for (let j = 7; j >= x; j--){
        another += '#';
    }

    for (let j = 7; j > x ; j--){
        another += "#";
    }
    console.log(another)
}
/*
(1.d extra) Zorg ervoor dat in de driehoek elke interval aantal symbolen een @ afgedrukt
wordt in plaats van een #. Maak gebruik van de variabele interval (let interval=5;)
*/

let interval = 5;
let counter = 4;

for ( let x = 7; x >= 1; x--){
    let another="";

    for (let i = 1; i < x; i++){
        another+=" ";
    }

    for (let j = 7; j >= x; j--){

        if (counter === interval - 1){
            another += '@';
            counter = 0;

        }else{
            another += '#';
            counter ++
        }
    }

    for (let j = 7; j > x ; j--){
        if (counter === interval - 1){
            another += '@';
            counter = 0;

        }else{
            another += '#';
            counter ++
        }
    }
    console.log(another)
}