const Vec = require('../../Oefening4');

class PolyLine {
    constructor() {
        this.vecs = [];
    }

    // Methode om een Vec-object toe te voegen aan vecs
    addVec(vec) {
        if (!(vec instanceof Vec)) {
            throw new InputError('Argument is geen Vec-object.');
        }
        this.vecs.push(vec);
    }

    // Methode voor het weergeven van alle Vec-objecten als een string
    toString() {
        return this.vecs.map(vec => vec.toString()).join(' ');
    }
}

class InputError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InputError';
    }
}

module.exports = PolyLine;
