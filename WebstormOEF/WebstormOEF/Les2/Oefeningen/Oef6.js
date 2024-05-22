function reverseArray(invoer)
{
    let reverseInvoer = [];
    for (let i = invoer.length - 1; i > 0; i--) {
        reverseInvoer.push(invoer[i]);
    }
    reverseInvoer.push(invoer[0]);
    return reverseInvoer;
}

let a = [1, 3, 5];
let b = reverseArray(a);

console.log(a);
console.log(b);