let Rabbit = function( type ){
    this.type = type;
};

Rabbit.prototype.speak = function(line) {
    console.log(`${this.toString()} says '${line}'`);
};

Rabbit.prototype.toString = function() {
    return `A ${this.type} rabbit`;
};


let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("huh?");

console.log(weirdRabbit.toString());

























/*class Rabbit {

    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`${this.type} says '${line}'`);
    }
    toString() {
        return ` ${this.type} `;
    }
}

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("huh?");
console.log(weirdRabbit.toString())

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
killerRabbit.speak("EEEEkh");
console.log(blackRabbit.toString());*/
