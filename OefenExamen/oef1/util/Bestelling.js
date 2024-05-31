const Bestellingsonderdeel = require("./Bestellingsonderdeel");
const Aankoop = require("./Aankoop");
const ProcentueleKorting = require("./ProcentueleKorting");

class Bestelling{
    constructor() {
        this._bestellingsonderdelen = [];
    }

    voegToe(bestellingsonderdeel){
        if (bestellingsonderdeel instanceof Bestellingsonderdeel){
            this._bestellingsonderdelen.push(bestellingsonderdeel)

        }else{
            throw new Error("Foutieve ingave voor bestellingsonderdeel")
        }
    }

    berekenPrijs() {
        let totalePrijs = 0;

        console.log(this._bestellingsonderdelen)

        for (const onderdeel of this._bestellingsonderdelen) {
            if (onderdeel instanceof Aankoop) {
                totalePrijs += onderdeel.aantal * onderdeel.produkt.prijs;
            }
        }

        console.log(totalePrijs)

        let totaleKorting = 0;
        for (const onderdeel of this._bestellingsonderdelen) {
            if (onderdeel instanceof ProcentueleKorting) {
                totaleKorting += onderdeel._kortingProcent;
            }
        }

        let resultaat = totalePrijs * (1 - totaleKorting / 100);
        return Math.max(resultaat, 0);
    }
}

module.exports = Bestelling;