const Persoon = require('./util/Person')

// Maak een nieuw Persoon object
let persoon = new Persoon("Jansen", "Jan", new Date(1990, 5, 15));

// Probeer setters en getters uit
persoon.naam = "Pieters";
persoon.voornaam = "Piet";
persoon.geboortedatum = new Date(1985, 3, 25);

// Druk naam, voornaam en leeftijd af
persoon.print();
