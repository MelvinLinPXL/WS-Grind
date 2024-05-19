/*(2) Maak een recursieve functie fibonnaci om het fibonacci-nummer van
een getal te berekenen.
*/

let fibonaccilength = 10;

let f0 =0;
let f1 = 1;
let fn = f1 + f0;


let outputstring = f0 +  " "  + f1 + " ";
for (let i = 2; i < fibonaccilength; i++){

    let fn = f1 + f0;
    outputstring += fn + " ";

    f0 = f1;
    f1 = fn
}

console.log(outputstring);



/*
(2.b extra) Maak gebruik van memoization om de efficiëntie van je programma te verhogen.
    Zoek op of stel de vraag aan chatGPT 🙂. Probeer de code van oefening 2 en oefening 2b
uit voor een hoge waarde van het getal.
*/

function fibonacciMemo(n, memo = {}) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    if (n in memo) {
        return memo[n];
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

// Voorbeeld gebruik:
console.log(fibonacciMemo(10)); // Output: 55
console.log(fibonacciMemo(50)); // Output: 12586269025 (veel sneller dan zonder memoization)

// Niet-memoized Fibonacci-functie voor vergelijking
function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Testen met hoge waarden
// n 45 voor unoptimised versie is 10 seconden het wordt exponentiel langer dus met 50 zit je all in minuten bezig
// terwijl voor memorization techniek kan je gewoon 100 in zetten en is nog redelijk snel

console.time("fibonacci");
console.log(fibonacci(40)); // Hoge waarde voor niet-memoized versie
console.timeEnd("fibonacci");

console.time("fibonacciMemo");
console.log(fibonacciMemo(100)); // Hoge waarde voor memoized versie
console.timeEnd("fibonacciMemo");
