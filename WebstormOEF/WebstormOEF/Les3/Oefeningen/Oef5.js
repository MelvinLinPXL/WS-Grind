'use strict';
let prompt = require('prompt-sync')();

class InputError extends Error{}

class Vec{
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get length(){

    }

    plus(vec){
        let uitkomstX = this._x + vec.x;
        let uitkomstY = this._y + vec.y;
        print(uitkomstX, uitkomstY);
    }

    minus(vec){
        let uitkomstX = this._x - vec.x;
        let uitkomstY = this._y - vec.y;
        print(uitkomstX, uitkomstY);
    }

    toString(){
        let afdruk = "";
        for (let i = 0; i < this._vecs.length; i++) {
            afdruk += "(";
            afdruk += this._vecs[i][0];
            afdruk += ", "
            afdruk += this._vecs[i][1];
            afdruk += ")";
        }
        console.log(afdruk);
    }

    print(x, y){
        console.log(`(${x}, ${y})`);
    }
}

class PolyLine{
    constructor() {
        this._vecs = [];
    }

    addVec(vector){
        if (vector instanceof Vec){
            this._vecs.push(vector);
        } else {
            throw new InputError("Fout Object!");
        }
    }

    toString(){
        let afdruk = "";
        for (let i = 0; i < this._vecs.length; i++) {
            afdruk += "(";
            afdruk += this._vecs[i][0];
            afdruk += ", "
            afdruk += this._vecs[i][1];
            afdruk += ")";
        }
        console.log(afdruk);
    }
}
try {
    let vec = new Vec(4, 5);
    let vec1 = new Vec(1, 2);
    vec.plus(vec1);
    let poly = new PolyLine();
    poly.addVec(vec);
    poly.addVec(vec1);
    poly.toString();
    vec.toString();
} catch (error){
    if (error instanceof InputError){
        console.log("InputError: " + error.message);
    } else {
        console.log(error.message);
    }
}
