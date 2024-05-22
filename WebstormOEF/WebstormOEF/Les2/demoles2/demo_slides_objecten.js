//objecten zijn een verzameling van eigenschappen (properties)
//property-naam gebruiken om waarde  op te halen
//functie-naam() gebruiken om functies op te halen (later)
/*
let person  = { name:"tim", age:22 };
console.log(person.name);
console.log(person["name"]);
person.age=23;
person.address="Hasselt";
console.log(person);


















// object uitpakken in variabelen
let person = {name:"tim",age:12};
//let {age} = person;
//console.log(age);

//let person = {name:"tim",age:12};
let {name, age} = person;
console.log(name);
age = 25;
console.log(person.age);
*/

//string is geen object, String is wel een object
//om functies van String te kunnen gebruiken, wordt er achterliggend
//een String-object gemaakt

//toUpperCase / toLowerCase
/*let letters = "abc";
letters = letters.toUpperCase();
console.log(typeof letters);
console.log( letters );

//indexOf / lastIndexOf
letters = letters.toLowerCase();
let index = letters.indexOf( "b" );
console.log( index );

//slice() = substring
letters = "abcdef";
console.log( letters.slice( 2,4 ) );
console.log( letters.slice( 2 ) );

//trim() = spaties voor en achteraan verwijderen
letters = "   abc   ";
console.log( letters.trim( ) );

//split() = een array maken van een string op basis van een splitteken
let zin = "dit is een zin";
console.log( zin.split( " " ) );
*/
// join: een array samenvoegen in een string met bepaald scheidingsteken
/*let a = [ 1, 2, 3 ];
let zin = ['dit', 'is', 'een','zin'];
console.log( (zin.join( " " )) );
/*
//repeat (oef 1 week 1 herwerken)
/*letters = "ha";
console.log(letters.repeat(5));

let aantalLijnen = 7;

for (let row = 1; row <= aantalLijnen; row++) {

    console.log("#".repeat(row));
}*/

//JSON (JavaScript Object Notation: makkelijk te lezen en te schrijven
//lijkt op een javascript object, maar let op de quotes rond de eigenschap

/*person = {
    "name": "Tim",
    "hobbies": ["reading", "running", "tennis"]
};
//console.log(person);
let hobbyPerson = {
    name: "tim",
    hobbies: ["reading", "running", "tennis"]
};
let personJson = JSON.stringify(hobbyPerson);
console.log(personJson);

let person2 = JSON.parse(personJson);

console.log(person2);

*/