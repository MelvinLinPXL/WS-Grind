'use strict';
let prompt = require('prompt-sync')();

class Account {
    constructor(landCode, bankNummer, restTien, saldo) {
        this._landCode = landCode;
        this._bankNummer = bankNummer;
        this._restTien = restTien;
        this._saldo = saldo;
    }

   deposit(amount){
        this._saldo += Number (amount);
   }

   withdraw(amount){
        this._saldo -= amount;
   }

    print(){
        let controleGetal = this._restTien % 97;
        let eerste = this._restTien.substring(0,5);
        let tweede = this._restTien.substring(4, 9);
        let laatste = this._restTien.substring(8);

        console.log(`${this._landCode}${this._bankNummer} ${eerste} ${tweede} ${laatste}${controleGetal} heeft een saldo van ${this._saldo} euro!`);
    }
}

let account = new Account("BE", "20", "3630467459", 30);
account.deposit(prompt());
account.withdraw(prompt());
account.print();