// naam: 
// plaats de code (require) om Produkt, Bestelling, Aankoop te laden hier.
const Produkt = require("./util/Produkt")
const Bestelling = require("./util/Bestelling")
const Aankoop = require("./util/Aankoop")
const ProcentueleKorting = require("./util/ProcentueleKorting")

// de onderstaande code bevat het hoofdprogramma en laat je ongewijzigd

let produkt1=new Produkt("krant",3.55);
let produkt2=new Produkt("snoep",2.33);
let bestelling=new Bestelling();
let bestellingsonderdeel1=new Aankoop(2,produkt1);
let bestellingsonderdeel2=new Aankoop(14,produkt2);
let bestellingsonderdeel3=new ProcentueleKorting(22.2);
let bestellingsonderdeel4=new ProcentueleKorting(11.4);
bestelling.voegToe(bestellingsonderdeel1);
bestelling.voegToe(bestellingsonderdeel2);
bestelling.voegToe(bestellingsonderdeel3);
bestelling.voegToe(bestellingsonderdeel4);
console.log(bestelling.berekenPrijs());
