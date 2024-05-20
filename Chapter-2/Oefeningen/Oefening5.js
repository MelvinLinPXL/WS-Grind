/*(5) Maak de functie berekenAfstand die de afstand tussen 2 punten berekent.
 */

function berekenafstand (punt1 , punt2){
    let x = Math.pow(punt1[0] - punt2[0] , 2);
    let y = Math.pow(punt1[1] - punt2[1] , 2);

    return Math.sqrt(x + y);
}

let punt1 = [2 , 4];
let punt2 = [4 , 6];

console.log(berekenafstand(punt1 , punt2))