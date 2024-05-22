let bericht = function (){

    let text;
    console.log("test");
    if (voornaam.value === "" || achternaam.value === ""){
        text = "Gelieve alle velden in te vullen a.u.b.";
    } else {
        text = `Welkom, ${voornaam.value} ${achternaam.value}`;
    }
    output.value = text;
}
let voornaam = document.getElementById("voornaam");
let achternaam = document.getElementById("achternaam");
let output = document.getElementById("output");
let knop = document.getElementsByTagName("button")[0];
knop.addEventListener("click", bericht);