/*(3) Maak de functie maakRij die twee argumenten min en max heeft. De functie geeft een
array terug met de gehele getallen gelegen tussen min en max (beide inclusief).
Pas de functie aan met een optioneel argument stap, dit argument heeft default waarde 1,
stap bevat de tussenstap tussen 2 waarden in de teruggegeven rij.
 */

function maakRij(minimum , maximum , ...tussenin){
    let georderdearray = [];
    georderdearray.push(minimum);

    //ascending
    tussenin.sort((a, b) => a - b);
    //descending
    //tussenin.sort((a, b) => b - a);


    for (let i = 0; i < tussenin.length; i++){
        if (Number.isInteger(tussenin[i]) && tussenin[i] > minimum && tussenin[i] < maximum) {
            georderdearray.push(tussenin[i])
        }

    }
    georderdearray.push(maximum);
    return georderdearray
}

console.log(maakRij(-45 , 100, 4 , - 2, 3 , -222 , 44444 , - 444 ,222 , 4444  , 33 , 22 ,0.333, -4.23))























/*
Dit was niet wat de oefening vraagde

function maakRij (...rij) {
    let minimum = rij[0];
    let maximum = rij[0];
    for (let i= 1; i < rij.length; i++ ){
        if (minimum > rij[i]){
            minimum = rij[i];
        }
    }

    for (let j= 1; j < rij.length; j++ ){
        if (maximum < rij[j]){
            maximum = rij[j];
        }
    }
    return [minimum, (minimum+ maximum) /2, maximum];
}


console.log(maakRij(1,3,6,2,87,2,1,-6,34,-5))

 */