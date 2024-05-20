class Date {
    static MONTHS = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

    constructor(day, month, year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }

    // Getter en setter voor day
    get day() {
        return this._day;
    }
    set day(day) {
        this._day = day;
    }

    // Getter en setter voor month
    get month() {
        return this._month;
    }
    set month(month) {
        this._month = month;
    }

    // Getter en setter voor year
    get year() {
        return this._year;
    }
    set year(year) {
        this._year = year;
    }

    // Methode om datum af te drukken in formaat 1/1/2008
    print() {
        console.log(`${this._day}/${this._month}/${this._year}`);
    }

    // Methode om maand af te drukken in formaat 1/jan/2008
    printMonth() {
        console.log(`${this._day}/${Date.MONTHS[this._month - 1]}/${this._year}`);
    }

    // Statische methode om een datum aan te maken
    static make(day, month, year) {
        return new Date(day, month, year);
    }
}

// Voorbeeldgebruik
let date1 = Date.make(1, 2, 2001);
date1.print(); // Output: 1/2/2001
date1.printMonth(); // Output: 1/feb/2001
