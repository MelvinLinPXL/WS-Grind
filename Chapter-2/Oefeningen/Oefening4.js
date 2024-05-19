/*(4) Maak een functie reverseArray. Deze functie neemt een array als argument en geeft de
array in omgekeerde volgorde terug. Het argument blijft ongewijzigd.
 */

let array = [1, 4 , 56];

function reversearray(array ){
    let newarray = [];
    for (let i = array.length - 1; i >=  0; i--){
        newarray.push(array[i]);
    }
    return newarray;
}

console.log(reversearray(array))

console.log(array.reverse())