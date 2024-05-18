'use strict';

// validatie: value moet een getal tussen lower en upper zijn
function validateNumber(value, lower, upper) {
    lower = lower ? lower : Number.NEGATIVE_INFINITY;
    upper = upper ? upper : Number.POSITIVE_INFINITY;
    if (typeof value != 'number' || value < lower || value >= upper) {
        throw new Error(`wrong value: ${value}`);
    }
    return value;
}

// validatie: value moet een object van de klasse T zijn
function validateInstaneof(value, T) {
    if (!(value instanceof T)) {
        throw new Error(`wrong value: ${value}`);
    }
    return value;
}


function Point(x, y) {
    // bij het uitvoeren van new Point(1,2) wordt een nieuw object gemaakt
    // het object heeft via .__proto__  een link naar Point.prototype

    // _x, _y wordt in de closure van function Point geplaatst
    let _x = null;
    let _y = null;

    // het object krijgt veld setX (die aan de _x in de closure kan)
    this.setX = function (x) {
        _x = validateNumber(x, 0, 1000);
    };

    // het object krijgt veld getX (die aan de _x in de closure kan)
    this.getX = function () {
        return _x;
    };

    // het object krijgt veld setY (die aan de _y in de closure kan)
    this.setY = function (y) {
        _y = validateNumber(y, 0, 1000);
    };

    // het object krijgt veld getX (die aan de _y in de closure kan)
    this.getY = function () {
        return _y;
    };


    // het object krijgt veld toString (die aan de _x in de closure kan)
    this.toString = function () {
        return `Point (${_x}, ${y})`;
    }

    // setX en setY worden uitgevoerd om _x en _y toe te kennen
    this.setX(x);
    this.setY(y);
}


function Shape(point) {
    // bij het uitvoeren van new Shape(point) wordt een nieuw object gemaakt
    // het object heeft via .__proto__  een link naar Shape.prototype

    let _point = null;

    this.setPoint = function (point) {
        _point = validateInstaneof(point, Point);
    };

    this.getPoint = function () {
        return _point;
    };

    this.toString = function () {
        return `Shape has point (${this.getPoint().getX()}, ${this.getPoint().getY()})`;
    }

    this.setPoint(point);
}

function Circle(point, radius) {
    // bij het uitvoeren van new Circle(point, radius) wordt een nieuw object gemaakt
    // het object heeft via .__proto__  een link naar Circle.prototype

    let _radius = null;

    this.setRadius = function (radius) {
        _radius = validateNumber(radius, 0, 100);
    };

    this.getRadius = function () {
        return _radius;
    };

    Shape.call(this, point);
    // call: roep de function Shape aan met argument point
    // de this in de Shape function verwijst nu naar dezelfde locatie als de this
    // die als argument meegegeven wordt
    // door het uitvoeren van de function Shape krijgt de this (in het argument)
    // extra velden setPoint, getPoint, toString

    // geef toString een nieuwe waarde
    this.toString = function () {
        return `Circle has point (${this.getPoint().getX()}, ${this.getPoint().getY()})`;

    }

    this.setRadius(radius);
}

// om instanceof correct te krijgen
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

let point = new Point(1, 2);
console.log(point instanceof Point);
console.log(point.toString());
let shape = new Shape(point);
console.log(shape instanceof Shape);
console.log(shape.toString());

let circle = new Circle(point, 12);
console.log(circle instanceof Shape);
console.log(circle instanceof Circle);
console.log(circle.toString());
