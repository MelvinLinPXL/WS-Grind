/*(1.a) Maak een functie minimum die het minimum van 2 number waarden berekent
en teruggeeft, maak geen gebruik van Math.min.
*/

function minimum(waarde1 , ...waarde2) {
    let laagste = waarde1;
    for (let i = 0; i <= waarde2.length; i++) {
        if (laagste > waarde2[i]) {
            laagste = waarde2[i];
        }
    }
    return laagste;
}

console.log(minimum(3, 7)); // Output: 3
console.log(minimum(10, 5)); // Output: 5
console.log(minimum(-1, -5)); // Output: -5

/*(1.b) Pas de functie minimum aan zodanig dat er ook meerdere waarden
meegegeven kunnen worden bij het aanroepen van de functie, maak geen
gebruik van Math.min
 */

console.log(minimum(3,4,5,6,-111,4,4,3,2,1000,-33, -11))