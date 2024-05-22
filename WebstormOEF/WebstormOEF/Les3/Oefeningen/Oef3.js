class Account {
    constructor(landCode, bankNummer, restTien) {
        this._landCode = landCode;
        this._bankNummer = bankNummer;
        this._restTien = restTien;
    }

    get landCode() {
        return this._landCode;
    }

    set landCode(value) {
        this._landCode = value;
    }

    get bankNummer() {
        return this._bankNummer;
    }

    set bankNummer(value) {
        this._bankNummer = value;
    }

    get restTien() {
        return this._restTien;
    }

    set restTien(value) {
        this._restTien = value;
    }

    print(){
        let controleGetal = this._restTien % 97;
        let eerste = this._restTien.substring(0,5);
        let tweede = this._restTien.substring(4, 9);
        let laatste = this._restTien.substring(8);

        console.log(`${this.landCode} ${this._bankNummer} ${eerste} ${tweede} ${laatste}${controleGetal}`);
    }
}

Account = new Account("BE", "20", "3630467459");
Account.print();