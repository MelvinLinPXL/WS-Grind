const generateMultiplier = function(factor) {
    return function(number) {
        return number * factor
    };
};

const twice = generateMultiplier(2);
const threeTimes = generateMultiplier(3);
console.log(twice(5)); // 10
console.log(threeTimes(6)); // 18
console.log(generateMultiplier(4)(2));
