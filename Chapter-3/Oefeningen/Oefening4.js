'use strict';
class InputError extends Error {}

class Vec{
    constructor(x, y){
        if(typeof x !== 'number' || typeof y !== 'number'){
            throw new InputError(`misse ingave x: ${x} of y: ${y}`);
        }
        this._x=x;
        this._y=y;
    }

    plus(vec){
        if(!(vec instanceof Vec)) {
            throw new InputError(`misse ingave vec: ${vec}`);
        }
        return new Vec(this._x+vec._x, this._y+vec._y) ;
    }

    minus(vec){
        if(!(vec instanceof Vec)) {
            throw new InputError(`misse ingave vec: ${vec}`);
        }
        return new Vec(this._x-vec._x, this._y-vec._y);
    }

    // Getter voor lengte
    get length() {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }

    // Methode voor het weergeven van de vector als een string
    toString() {
        return `(${this._x},${this._y})`;
    }
}

try{
    let v=new Vec(2,3);
    let v2=new Vec(3,4);
    let v3=v.plus(v2);
    console.log(v.toString());
    console.log(v.length);
    let v4=new Vec(new Date(),1);

} catch(error){
    console.log(error.message);
}
console.log("done");

module.exports = Vec