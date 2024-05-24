// SpeelbaarObject.js
class SpeelbaarObject {
    get waarde() {
        return 0;
    }

    isGelijkAan(speelbaarObject) {
        if (!(speelbaarObject instanceof SpeelbaarObject)) {
            throw new Error('misse ingave: geen SpeelbaarObject');
        }
        return true;
    }

    static genereerWillekeurigGetal(min, max) {
        if (!Number.isInteger(min) || !Number.isInteger(max) || min >= max) {
            throw new Error('misse ingave voor min of max');
        }
        return Math.floor(min + Math.random() * (1 + max - min));
    }
}

// Dobbelsteen.js
class Dobbelsteen extends SpeelbaarObject {
    constructor() {
        super();
        this._zijde = '';
        this._zijde = this.getWillekeurigeZijde();
    }

    get zijde() {
        return this._zijde;
    }

    get waarde() {
        switch (this._zijde) {
            case '1':
                return 1;
            case '2':
                return 2;
            case '3':
                return 3;
            case '4':
                return 4;
            case '5':
                return 5;
            default:
                return 0;
        }
    }

    isGelijkAan(speelbaarObject) {
        super.isGelijkAan(speelbaarObject);
        if (!(speelbaarObject instanceof Dobbelsteen)) {
            throw new Error('misse ingave: geen Dobbelsteen');
        }
        return this._zijde === speelbaarObject.zijde || this._zijde === '*' || speelbaarObject.zijde === '*';
    }

    getWillekeurigeZijde() {
        const willekeurigGetal = SpeelbaarObject.genereerWillekeurigGetal(1, 6);
        switch (willekeurigGetal) {
            case 1:
                return '1';
            case 2:
                return '2';
            case 3:
                return '3';
            case 4:
                return '4';
            case 5:
                return '5';
            default:
                return '*';
        }
    }
}
// Worp.js
class Worp {
    constructor(aantalDobbelstenen) {
        if (!Number.isInteger(aantalDobbelstenen) || aantalDobbelstenen < 2) {
            throw new Error('misse ingave voor aantalDobbelstenen');
        }
        this._dobbelstenen = [];
        for (let i = 0; i < aantalDobbelstenen; i++) {
            this.voegDobbelsteenToe(new Dobbelsteen());
        }
    }

    voegDobbelsteenToe(dobbelsteen) {
        if (!(dobbelsteen instanceof Dobbelsteen)) {
            throw new Error('misse ingave: geen Dobbelsteen');
        }
        this._dobbelstenen.push(dobbelsteen);
    }

    get resultaat() {
        let maxSom = 0;
        for (let i = 0; i < this._dobbelstenen.length; i++) {
            for (let j = i + 1; j < this._dobbelstenen.length; j++) {
                if (this._dobbelstenen[i].isGelijkAan(this._dobbelstenen[j])) {
                    const som = this._dobbelstenen[i].waarde + this._dobbelstenen[j].waarde;
                    if (som > maxSom) {
                        maxSom = som;
                    }
                }
            }
        }
        return maxSom;
    }
}
let dobbelsteen1 = new Dobbelsteen();
let dobbelsteen2 = new Dobbelsteen();
let dobbelsteen3 = new Dobbelsteen();
let dobbelsteen4 = new Dobbelsteen();
console.log( dobbelsteen1.zijde ); // 1
console.log( dobbelsteen2.zijde ); // 2
console.log( dobbelsteen3.zijde ); // 1
console.log( dobbelsteen4.zijde ); // *
console.log( dobbelsteen1.waarde); // 1
console.log( dobbelsteen2.waarde ); // 2
console.log( dobbelsteen3.waarde ); // 1
console.log( dobbelsteen4.waarde ); // 0
console.log( dobbelsteen1.isGelijkAan(dobbelsteen1)); //false
console.log( dobbelsteen1.isGelijkAan(dobbelsteen3)); //true
console.log( dobbelsteen1.isGelijkAan(dobbelsteen4)); //true
console.log( dobbelsteen4.isGelijkAan(dobbelsteen1)); //true
let worp = new Worp( 4 );
console.log( worp.resultaat);