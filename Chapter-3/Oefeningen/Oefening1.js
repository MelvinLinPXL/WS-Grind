/*(1) Maak een object-literal ‘persoon’ aan met daarin je naam, voornaam en de
geboortedatum. Voor de geboortedatum gebruik je de voorgedefinieerde klasse Date.
 */

// Maak een object-literal voor persoon
let persoon = {
    naam: "Jansen",
    voornaam: "Jan",
    geboortedatum: new Date(1990, 5, 15), // De maand is 0-gebaseerd, dus 5 betekent juni


    berekenleeftijd: function() {
        let vandaag = new Date();
        let leeftijd = vandaag.getFullYear() - this.geboortedatum.getFullYear();
        let maandVerschil = vandaag.getMonth() - this.geboortedatum.getMonth();
        if (maandVerschil < 0 || (maandVerschil === 0 && vandaag.getDate() < this.geboortedatum.getDate())) {
            leeftijd--;
        }
        return leeftijd;
    },

    // Functie om naam, voornaam en leeftijd af te drukken
    print: function() {
        console.log(`Naam: ${this.naam}`);
        console.log(`Voornaam: ${this.voornaam}`);
        console.log(`Leeftijd: ${this.berekenleeftijd()}`);
    }

};

persoon.print()