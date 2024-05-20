/*(2) Herwerk oefening1. Maak gebruik van een class en voozie setters en getters voor alle
Eigenschappen.
 */

class Persoon {
    constructor(naam, voornaam, geboortedatum) {
        this._naam = naam;
        this._voornaam = voornaam;
        this._geboortedatum = geboortedatum;
    }

    // Setter voor naam
    set naam(naam) {
        this._naam = naam;
    }

    // Getter voor naam
    get naam() {
        return this._naam;
    }

    // Setter voor voornaam
    set voornaam(voornaam) {
        this._voornaam = voornaam;
    }

    // Getter voor voornaam
    get voornaam() {
        return this._voornaam;
    }

    // Setter voor geboortedatum
    set geboortedatum(geboortedatum) {
        this._geboortedatum = geboortedatum;
    }

    // Getter voor geboortedatum
    get geboortedatum() {
        return this._geboortedatum;
    }

    // Functie om leeftijd te berekenen
    berekenLeeftijd() {
        let vandaag = new Date();
        let geboortejaar = this._geboortedatum.getFullYear();
        let leeftijd = vandaag.getFullYear() - geboortejaar;
        let maandVerschil = vandaag.getMonth() - this._geboortedatum.getMonth();
        if (maandVerschil < 0 || (maandVerschil === 0 && vandaag.getDate() < this._geboortedatum.getDate())) {
            leeftijd--;
        }
        return leeftijd;
    }

    // Functie om naam, voornaam en leeftijd af te drukken
    print() {
        console.log(`Naam: ${this._naam}`);
        console.log(`Voornaam: ${this._voornaam}`);
        console.log(`Leeftijd: ${this.berekenLeeftijd()}`);
    }
}

module.exports = Persoon;