let persoon = {
    firstname:"Bente",
    lastname:"Bussé",
    dateOfBirth: new Date(2004, 5, 18),
    berekenleeftijd: function (){
        let now = new Date();
        let birthDayThisYear = new Date(now.getFullYear(),
            this.dateOfBirth.getMonth(),
            this.dateOfBirth.getDate());
        let differenceInYears = now.getFullYear() - this.dateOfBirth.getFullYear();
        if (now < birthDayThisYear){
            differenceInYears--;
        }
        return differenceInYears;
    },
    print() {
        console.log(`${this.firstname} ${this.lastname} is ${this.berekenleeftijd()}`)
    }
}

persoon.print();