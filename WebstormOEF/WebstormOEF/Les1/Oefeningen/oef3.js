const prompt = require('prompt-sync')();
let groote = 8;
let afdruk = "";

for (let i = 0; i < groote; i++) {
    for (let j = 0; j < groote; j++) {
        if (i % 2 === 0){
            if (j % 2 === 0){
                afdruk += "#";
            } else {
                afdruk += " ";
            }
        } else {
            if (j % 2 !== 0){
                afdruk += "#";
            } else {
                afdruk += " ";
            }
        }
    }
    console.log(afdruk);
    afdruk = "";
}