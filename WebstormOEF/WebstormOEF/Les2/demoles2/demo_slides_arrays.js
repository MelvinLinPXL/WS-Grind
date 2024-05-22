//Arrays of data sets
/*let listOfNumbers = [2, 3, 5, 7, 11];
let emptyArray = [];

// elementen  array op basis van index
//0 based
// toevoegen op basis van index (dus geen fixed length)

//console.log(listOfNumbers[0]);
listOfNumbers[3] = 3;
//console.log(listOfNumbers.length);
listOfNumbers[listOfNumbers.length] = 4; // dit kan ook anders, zie later
//console.log(listOfNumbers.length);
listOfNumbers[10]=5;
console.log(listOfNumbers.length);
//console.log(listOfNumbers);
/*for(let counter = 0; counter < listOfNumbers["length"]; counter++){
    console.log(listOfNumbers[counter]);
}*/
/*for ( let number of listOfNumbers ){
    console.log(number);
}*/

// benoemde properties of eigenschappen
//console.log(listOfNumbers.length);
//console.log(listOfNumbers["length"]);

// array loops
/*let numbers = [1,2,3,4,3,2,1];
/*for ( let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
numbers[12] = 14;
//for each (let op: niet in!)
for ( let number of numbers ){
    console.log(number);
}*/

// functies
//plaats van bepaald element in array = eerst gevonden
// of -1 indien niet bestaand
/*

console.log(numbers.indexOf(2));
console.log(numbers.indexOf(5));
//plaats laatst voorkomend bepaald element
console.log(numbers.lastIndexOf(2));

// laatste element verwijderen
let numbers = [1,2,3,4,3,2,1];
let last = numbers.pop();
console.log(numbers.length);
console.log(last);
*/
//element achteraan bijvoegen
/*let numbers = [1,2,3];
numbers.push(4);
numbers[10] = 5;
let numberString="";
for ( let number of numbers ){
    numberString +=  number + " ";
}
console.log(numberString);*/

/*//  element vooraan verwijderen
let first=numbers.shift();
console.log(first);
//element vooraan toevoegen
numbers.unshift(0);
//ook eens doen met numberString = null of undefined
numberString="";
for ( let number of numbers ){
    numberString +=  number + " ";
}
console.log(numberString);

// slice = een stuk van de array van index1 tot index2 of tot einde
let names = ["Jan", "Carine", "Luc", "Sam", "Nele", "Tim"];
//console.log(names.slice(1,3));
//console.log(names.slice(2));
//console.log(names);
*/

//samenvoegen van 2 arrays of een array met een element
/*let names = ["Jan", "Carine", "Luc", "Sam", "Nele", "Tim"];
/*names = names.concat("Sofie");
console.log(names);
//let newNames= ["Geert","Arno"]
names=names.concat(["Geert","Arno"]);
console.log(names);*/





// verschil met push
/*names.push("Rita");
names.push(["Ingrid", "Carina"]);
console.log(names);
/*let nameString="";
for (let name of names){
    nameString += name + " ";
    console.log(name);
}
console.log(nameString);*/
//insert uitzoeken

//rest-operator: onbepaalde hoeveelheid parameters bij functie
// ...numbers == array numbers
/*let getallen = [1,2,3,4];
function sum(...verzameling) {
    if(verzameling.length === 0){
        return undefined;
    }
    let sum=0;
    for (let number of verzameling){
        sum += number;
    }
    return sum;
}
console.log(sum(1));
// probeer dit eens
//console.log(sum(getallen));
// spread-operator
console.log(sum(...getallen));*/

//waarde array uitpakken in variabelen*/

/*let a, b ;
let waarden = [1,2];
[a,b] = waarden;
console.log(a, b);
[a,b] = [b,a];
console.log(a, b);
console.log(a);*/

/*function printRij1 ([ rij1, ...rijen ]){
    console.log(rij1);

    console.log(rijen);

}

let matrix=[[1,2],[5,6],[3,4]];
printRij1(matrix);*/

/*function printRij2 ( [a]){
    console.log(a);
    console.log(arguments);
    console.log(arguments[0].sort());

}
let matrix=[[1,2],[5,6],[3,4]];
printRij2(matrix, "5");*/

// verschil tussen arguments en ...array
//arguments neemt alle argumenten,
// ook die waar wel een parameter voor voorzien is.
//arguments is geen array*/