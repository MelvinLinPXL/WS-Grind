//objecten bestaan uit sleutel-waarde paren, reeds gezien in hfdst 4 => nu uitbreiding naar functies
// key = string of Symbol
// waarde: eender welk datatype of functie

/*let person = {
    name : 'Tim',
    age : 7,
    print : function () {
        console.log (`naam: ${this.name} leeftijd: ${this.age}`);
    }
};
person.print();
//uitpakken in bindings
let {name, age}= person;
console.log(name);*/
/*for (let item of person){
    console.log(item);
}*/

// object maken vanuit bindings
/*let name= "TIM";
let age = "7";
const print = function (){
    console.log (`naam: ${this.name} leeftijd: ${this.age}`)
}
print(); //undefined, this hoort bij object waar de print functie deel van uitmaakt.

let person = {name, age, print};
name = "Frits";
age="28";
let person1 = {name, age, print};
let person2= {name:"Carine",age:25,print}  ;
person2.print();
person.print();
person1.print();*/



















//this verwijst naar het object waar de functie deel van uitmaakt.
//vorige week gezien hoe je de waarde van properties van een object kan wijzigen
//tegen code conventions
// beter set en get functies gebruiken.
//soms wordt dan een underscore gebruikt om velden aan te geven die
//best gewijzigd worden via de setter van object
/*let person = {
    _name : 'Tim',
    _age : 7,
    print : function () {
        console.log (`naam: ${this._name} leeftijd: ${this._age}`);
    },
    setName : function (name) {
        this._name = name;
    },
    getName : function () {
        return this._name;
    },
    setAge : function (age) {
        this._age = age;
    },
    getAge : function () {
        return this._age;
    }
};
person.print();
person.setName("laura");
person.setAge(32);
person.print();
console.log(person.getName());*/

// korte schrijfmethode
// eerst alle variabelen maken en dan in 1 object zetten

/*let name = 'Tim';
let age = 7;
const print = function(){
    console.log(`naam: ${this.name} leeftijd: ${this.age}`);
};
let person = {name, age, print};
person.print();
console.log(person.name);
/*for (let field of person){
    console.log(field);
}*/
// let op: hier niet werken met punt, want dan neemt hij property item en niet de waarde ervan.
/*for (let item in person){
    console.log(`${item} is ${person[item]}`); //item = "name" => person["name"]
}
console.log(person.name);
console.log(person["print"]);

//belangrijk om weten
for (let key in person){
    console.log(key);
}*/


//functie kort schrijven in object, zonder keywoord function
/*let person = {
    name : 'Tim',
    age : 7,
    print ()   {
        console.log (`naam: ${this.name} leeftijd: ${this.age}`);
    }
};
person.print();
/*for(let value of person){
    console.log(person);
}
for (let key in person) {
    console.log(key);
    //console.log(person.key);
    console.log(person[key]); //(person["name"]
}*/



// wat als: name collisions door reeds gebruik bepaalde naam elders in code
// iemand geeft andere betekenis aan naamveld
// gebruik datatype Symbol => uniek gegeven, let op de vierkante haken rond property

/*let id = Symbol("id");
let person = {
    name : 'Tim',
    [id] : 1,
    print ()   {
        console.log (`naam: ${this.name} id: ${this[id]}`);
    }
};
person.print();

for (let key in person){
    console.log(key);
}*/

// ook voor functies
/*let id = Symbol("id");
let print = Symbol("print");
let person = {
    name : 'Tim',
    [id] : 1,
    [print] : function () {      //let op: hier niet de verkorte versie
            console.log (`naam: ${this.name} id: ${this[id]}`);
    }
};
person[print]();
for (let key in person){
    console.log(key);
}
/*for (let item of person){
    console.log(item);
}*/
//error: person is not iterable*/

//iterators bij een string: Symbol.iterator
//next(), value, done
/*let name = 'tim';
let nameIterator = name [Symbol.iterator]();
let element= nameIterator.next();
while(!element.done){
    console.log(`letters: ${element.value}`);
    element = nameIterator.next();
}
//output:
//t
//i
//m

for (let value of name){
    console.log(value);
}*/


//nu eerst demoMaps!!!!!
//vertrekkend van een leeg object
//toevoegen van named property's achteraf
/*let rabbit = {};
rabbit.type = 'green';
rabbit.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");*/





// methode, type, this, call
/*let type = 'green rabbit';
/* function Rabbit(type){
    this.type = type;
}
function speak(line) {
    console.log((`The ${this.type}  says '${line}'`));
}
//(speak("tekst"));
let greenRabbit= {type,speak};
greenRabbit.speak('whoeha');
let whiteRabbit = {
    type: "white rabbit"};

//whiteRabbit.speak("Oh my ears ... how late it's getting!");

speak.call(whiteRabbit,"Burp!");*/

// this is verbonden met het object waar de functie deel van uitmaakt
//in een innerfunctie van deze functie is this undefined.
/*const print = function(){
    console.log(this.name);
    const printName = function () {
        console.log(this.name.toUpperCase());
    };
    printName();
};
let person = {name:'tim', print};
person.print();*/











//oplossing: de pijl-notatie
/*const print = function(){
    console.log(this.name);
    const printName = ()=> {
        console.log(this.name.toUpperCase());
    }
    printName();
};
let person = {name:'tim', print};
person.print();*/
