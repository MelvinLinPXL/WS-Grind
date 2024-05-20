const PolyLine = require('./util/PolyLine');
const Vec = require('../Oefening4');

// Maak een nieuwe PolyLine
let polyline = new PolyLine();

// Voeg Vec-objecten toe aan de PolyLine
polyline.addVec(new Vec(1, 2));
polyline.addVec(new Vec(3, 32));
polyline.addVec(new Vec(2, 2));

// Druk de PolyLine af
console.log("PolyLine:", polyline.toString()); // Output: (1,2) (3,32) (2,2)
