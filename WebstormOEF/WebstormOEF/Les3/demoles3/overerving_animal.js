//overerving
class Animal {
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
//console.log(rabbit instanceof Animal);
//console.log(rabbit instanceof Rabbit);
//rabbit.describe();
//Rabbit.describe();