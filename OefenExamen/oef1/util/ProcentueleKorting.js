const Bestellingsonderdeel = require("./Bestellingsonderdeel");

class ProcentueleKorting extends Bestellingsonderdeel
{
    constructor(kortinProcent) {
        super();
        this._kortingProcent = kortinProcent;
    }

    get kortinProcent() {
        return this._kortinprocent;
    }

    set kortinProcent(value) {
        if (typeof value !== "number" || value <= 0 || value >= 100)
        {
            throw new Error("Foutieve ingave voor kortingProcent")
        }else{
            this._kortinprocent = value;
        }
    }
}

module.exports = ProcentueleKorting;