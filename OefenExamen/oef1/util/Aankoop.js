const Bestellingsonderdeel = require("./Bestellingsonderdeel");

class Aankoop extends Bestellingsonderdeel {
    constructor(aantal , produkt) {
        super();
        this._aantal = aantal;
        this._produkt = produkt
    }

    get aantal() {
        return this._aantal;
    }

    set aantal(value) {
        if (Number.isInteger(value) && value > 0){
            this._aantal = value;
        }else{
            throw new Error("Foutieve ingave voor aantal")
        }
    }

    get produkt() {
        return this._produkt;
    }

    set produkt(value) {
        if (value instanceof Produkt) {
            this._produkt = value;
        }else{
            throw new Error("Foutieve ingave voor produkt")
        }
    }
}

module.exports = Aankoop;