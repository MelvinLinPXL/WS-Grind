



//vb, dan met let en dan met use strict
//'use strict';
/*name = 'Tim';
console.log(name);
console.log(global.name);*/




/*'use strict';

let name = 'tim';
console.log(name);
console.log(global.name);*/











// die use strict bovenaan in script of als eerste regel in functie
//  in for lus de let niet plaatst,   global , met use strict niet.
//'use strict'; //creëert referenceError
//vb

/*function canYouSpotTheProblem() {

    for ( counter = 0; counter < 10; counter++){
        console.log("Happy");
    }

}


canYouSpotTheProblem();
console.log(counter);*/





/*function canYouSpotTheProblem() {
    'use strict';
    for (let counter = 0; counter < 10; counter++){
        console.log("Happy");
    }

}




// fouten bij object niet getoond, omdat hier uitleg is*/
//'use strict';
//constructor javascript object
/*function Person(name){
    this.name = name;
}

let ferdinand =  Person("Ferdinand");
//console.log(name);
console.log(ferdinand.name);*/



/*'use strict';

function Person(naam) {
    this.name = naam;
}

let ferdinand = new Person("Ferdinand");
console.log(ferdinand.name);
console.log(ferdinand);
console.log(name);
*/









//try ---catch ---finally met ppt met voorgaande voorbeeld*/
/*'use strict';
function Person(naam) {
    this.name = naam;
}

try {

    let ferdinand = new Person("Ferdinand");

    console.log(ferdinand.name);
    console.log(name);

} catch (error) {
    console.log(error.toString());
} finally {
    console.log("en nu sluit ik af");
}
console.log("programma is tot hier");*/




// zelf errors gooien met throw (zie dia 9 env)
// zelf laten uitproberen*/

/*'use strict'
let invert = function (number){
    if(typeof number != 'number'){
        throw new Error ("not a number");
    }
    if (number === 0){
        throw new Error("division by 0");
    }
    return 1/number;
}

try{
    let result = invert(5);
    //console.log(ferdinand.name);
    console.log((`result = ${result}`));
} catch (error){
    console.log(`Exception: ${error.message}`);
}finally {
    console.log('finished');
}*/

/*class InputError extends Error {}
class ArithmeticError extends Error {}

function invert(number){
	if (typeof number != 'number'){
		throw new InputError("not a number");
	}
	if (number === 0){
		throw new ArithmeticError("division by 0");
	}

	return 1 / number;
}
try{
	let result = invert(10);
	console.log(`result = ${result}`);
	//console.log(Ferdinand.name);
} catch( error ) {
	if (error instanceof InputError){
		console.log(`InputError: ${error.message}`);
		console.log("let op, invert is een functie voor getallen");
	} else if (error instanceof ArithmeticError){
		console.log(`ArithmeticError: ${error.message}`);
	}else {
	    console.log(error.message);
    }
}


/*try{
    let result = invert("p");
    console.log((`result = ${result}`));
} catch (error){
    console.log(`Exception: ${error.message}`);
}*/




let prompt= require('prompt-sync')();
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") {return "L";}
    if (result.toLowerCase() == "right") {return "R";}
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch ( error ) {
    console.log("Something went wrong: " + error.toString());
}

