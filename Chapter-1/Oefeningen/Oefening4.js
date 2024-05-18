

/*(4) Schrijf een programma dat de som afdrukt van alle getallen deelbaar door 3 gelegen
tussen een bovengrens en een ondergrens.
    let bovengrens = 1;
let ondergrens = 100;
*/

let total = 0;
let ondergrens = 1;
let bovengrens = 100;

for (let i = ondergrens ; i < bovengrens; i++){
    if( i % 3 === 0) {
        total += i;
    }
}
console.log(total);