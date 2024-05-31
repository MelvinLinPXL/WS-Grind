class Produkt {
    constructor(naam, prijs) {
        this.naam = naam;
        this.prijs = prijs;
    }

    get naam() {
        return this._naam;
    }

    set naam(value) {
        if (typeof value !== 'string' || value.length <= 2) {
            throw new Error('Foutieve ingave voor naam');
        }
        this._naam = value;
    }

    get prijs() {
        return this._prijs;
    }

    set prijs(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Foutieve ingave voor prijs');
        }
        this._prijs = value;
    }
}

module.exports = Produkt;
