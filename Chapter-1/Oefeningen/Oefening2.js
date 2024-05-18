/* Looping And Conditions Using Number.isInteger */
/* can also use modulo % */

/*
(2) Schrijf een programma dat alle getallen tussen 1 en 100 afdrukt. Voor getallen deelbaar
door 3 maar niet deelbaar door 5 wordt in plaats van het getal "Fizz" afgedrukt. Voor
getallen deelbaar door 5 maar niet deelbaar door 3 wordt "Buzz" afgedrukt. Voor getallen
deelbaar door 3 en deelbaar door 5 wordt "FizzBuzz" afgedrukt.
 */

let numbers ="";
for (let i = 1; i < 101; i++){
    if( Number.isInteger(i / 3) === true && Number.isInteger(i/5) === false){
        numbers += " Fizz ";
    } else if (Number.isInteger( i/ 3) === false && Number.isInteger(i/5) === true) {
        numbers += " Buzz "
    } else if (Number.isInteger( i/ 3) === true && Number.isInteger(i/5) === true) {
        numbers += " FizzBuzz "
    } else {
        numbers += i + " ";
    }
}

console.log(numbers);

/*
Alternative

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}

*/