//alternatief voor object
//key mag eender welk datatype zijn
/*let ages = new Map();
ages.set("Boris",39);
ages.set("Liang", 22);
ages.set("Julia", 60);
//ages.set(10,'Virginie');
console.log(`Julia is ${ages.get("Julia")}`);
console.log(`Is Jack's age known? ${ages.has("Jack")}`);
//console.log(`Is Virginie's age known? ${ages.has("Virginie")}`)
console.log(ages.has("toString"));
for (let age of ages){
    console.log(age);
}*/

/*let scores = new Map();
scores.set("Thomas", 18);
scores.set("Robby",10);
scores.set("Aya", 15);
console.log(scores.get("Aya"));
console.log(scores.has('Brecht'));*/

let friends = new Map();
let person={ name : "Ziggy", age: 19, address: "weetikveel", tel: "05894256"};
friends.set(20205698, person);
console.log(friends.get(20205698));
friends.set(25698, "Koen");
console.log(friends.get(25698));
//console.log(friends);





