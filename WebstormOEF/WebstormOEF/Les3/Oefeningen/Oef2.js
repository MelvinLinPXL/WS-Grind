
class Persoon {
    constructor (name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    set name (name){
        this._name = name;
    }

    set dateOfBirth (date){
        this._dateOfBirth = date;
    }

    get name (){
        return this._name;
    }

    get dateOfBirth (){
        return this._dateOfBirth;
    }

    berekenLeeftijd(){
        let now = new Date();
        let birthDayThisYear = new Date(now.getFullYear(), this.dateOfBirth.getMonth(), this.dateOfBirth.getDate());
        let differenceInYears = now.getFullYear() - this.dateOfBirth.getFullYear();
        if (now < birthDayThisYear){
            differenceInYears--;
        }
        return differenceInYears;
    }

    print(){
        console.log(`${this.name} is ${this.berekenLeeftijd()}`)
    }
}

let persoon = new Persoon("Bente Bussé", new Date(2004, 5, 18));
persoon.print();