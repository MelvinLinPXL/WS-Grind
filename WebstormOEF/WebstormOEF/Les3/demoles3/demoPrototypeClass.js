

//Object.create en new
/*let protoRabbit = {
    speak(line) {
        console.log(`${this.type} says '${line}'`);
    },
    print(){
        console.log(this.type);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
killerRabbit.print();*/









/* let Rabbit = function( type, age ){
    this.type = type;
    this.age= age;
};

Rabbit.prototype.speak = function(line) {
    console.log(`${this.toString()} says '${line}'`);
};

Rabbit.prototype.toString = function() {
    return `A ${this.type} rabbit`;
};*/

/*let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("huh?");

console.log(weirdRabbit.toString());*/










//class is eenvoudiger dan prototypes, maar intern w prototypes gebruikt
/*class Rabbit {


    constructor(type,age) {
        this._type = type;
        this.age = age;
    }

    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if(!(Number.isNaN(Number(value)))) {
            this._age = value;
        }
    }

    speak(line) {
        console.log(`${this.toString()} says '${line}'`);
    }
    toString() {
        return ` ${this._type} rabbit is ${this._age}`;
    }
}

let weirdRabbit = new Rabbit("weird", 5);
weirdRabbit.speak("huh?");

console.log(weirdRabbit.toString());
/*let Rabbit = function( type ){
    this.type = type;
};*/
/*let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
killerRabbit.speak("EEEEkh");
console.log(blackRabbit.toString());




/*
Rabbit.prototype.speak = function(line) {
    console.log(`${this.toString()} says '${line}'`);
};

Rabbit.prototype.toString = function() {
    return `A ${this.type} rabbit`;
};*/







/*class Matrix {
    constructor(height, width, element = (i, j) => undefined) {
        this.height = height;
        this.width = width;
        this.contents = [];
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                this.contents[i * this.width + j] = element(i, j);
            }
        }
        console.log(this.contents);
    }
    get(i,j) {
        return this.contents[i * this.width + j];
    }
    set(i,j, value) {
        this.contents[i * this.width + j] = value;
    }

    [Symbol.iterator] () {
        return new MatrixIterator(this);
    }
}

class MatrixIterator {
    constructor( matrix ) {
        this.index = 0;
        this.matrix = matrix;
    }


    next() {
        if (this.index == this.matrix.contents.length) {
            return {done: true};
        }
        let i = Math.floor( this.index / this.matrix.width );
        let j = this.index % this.matrix.width;
        let value = { i, j, value: this.matrix.get(i, j) };
        this.index++;
        return {value, done: false};
    }
}



let matrix = new Matrix(3,2, (i,j) => i*2+j);
for (let {i, j, value} of matrix) {
    console.log(i, j, value);
}*/

//simpel voorbeeld setter en getter, let op werkt niet zonder _
/*class Rabbit {




    constructor(type, age) {
        this._type = type;
        this._age = age;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    /*get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if(Number.isNaN(Number(value))){
            console.log("geen getal ingegeven voor leeftijd");
        }
        else{
            this._age = value;
        }
    }*/
/*}

let greenRabbit = new Rabbit("green", 5);
console.log(greenRabbit);

greenRabbit.type = "light green";
console.log(greenRabbit);*/
/*class Person  {
    constructor(name,age) {
        this.name=name;
        this.age = age;
    }

    set name (name) {
        this._name = name;

    }
    get name () {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if(!(Number.isNaN(value))) {
            this._age = value;
        }
    }

    toString(){
        return `leeftijd van ${this.name} is ${this._age}`
    }

}

let person = new Person('tim',7);
console.log(person.age);
/*person.name="Lucie";
console.log(person.name);
console.log(person.toString());

/*person.name='sofie'; //set
console.log(person.name); //get
person["name"] = 'carine';
console.log(person["name"]);
*/

/*class Temperature {
	constructor(celsius) {
		this._celsius = celsius;
	}

    get celsius() {
        return this._celsius;
    }

    set celsius(value) {
        this._celsius = value;
    }

    get fahrenheit() {
		return this.celsius * 1.8 + 32;
	}
	set fahrenheit(value) {
		this.celsius = (value - 32) / 1.8;
	}
	toString(){
	    return `Celcius: ${this.celsius}° komt overeen met Fahrenheit ${this.fahrenheit}°`
    }
	static fromFahrenheit(value) {
		return new Temperature((value - 32) / 1.8);
	}
}
let temp = new Temperature(22);
console.log(temp.fahrenheit);// → 71.6
console.log(temp.toString());
let temp1 = Temperature.fromFahrenheit(86);
console.log(temp1.toString());

temp.fahrenheit = 86;
console.log(temp.celsius); // → 30
/*let temp2 = Temperature.fromFahrenheit(125);
console.log(temp2.toString()); // → 51.67*/




//overerving
/*class Animal {
    constructor(name){
        this._speed = 0;
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    run(speed){
        this.speed +=speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stopped`);
    }
    describe(){
        console.log(`animal ${this._name}`)
    }

    static describe(){
        console.log(`Animal`);
    }
}

//overerven van Animal
class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} hides!`);
    }

    run(speed){
        super.run(speed);
        console.log("mijn konijn is snel hé");
    }
    describe(){
        super.describe();
        console.log(`rabbit`);
    }

    static describe(){
        super.describe();
        console.log(`Rabbit`);
    }
}
//Rabbit.describe();
let rabbit = new Rabbit ("yellow rabbit");
rabbit.run(5);
rabbit.stop();
rabbit.hide();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
rabbit.describe();
Rabbit.describe();

/*class Person {
    constructor(name) {
        this.name = name;
    }

    set name (name){
        this._name = name;
    }
    get name (){
        return this._name;
    }

}

let person = new Person("tim");
person._name = "Sofie";
console.log(person._name);*/
