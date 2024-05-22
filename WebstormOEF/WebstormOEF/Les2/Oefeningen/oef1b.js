const prompt = require('prompt-sync')();
function minimum(...numbers)
{
    let lowest = numbers[0];
    for (let number of numbers) {
        if (number < lowest){
            lowest = number;
        }
    }
    return lowest;
}
console.log(minimum(5, 16, 3, 19, 5))


