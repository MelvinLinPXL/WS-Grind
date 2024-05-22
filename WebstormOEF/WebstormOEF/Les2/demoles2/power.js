//demo arrow-notation
/*const power = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent ; i++) {
        result *= base;
    }
    return result;
}
console.log(power(2,3)); // 8*/

/*const power = function (base,exponent){
    let result= 1;
    for(let counter = 0; counter<exponent; counter++){
        result*=base;
    }
    return result;
}

console.log(power(2,3));*/




// demo recursion
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}
console.log(power(2, 3));
//2 * 2*2*1

//return 2 * 2* 2* 1