let splits = function () {
    let line = email.value.split(".");
    voornaam.value = line[0];
    let split = line[1].split("@");
    achternaam.value = split[0];
    subdomein.value = split[1];
    domein.value = line[2];
}
let email = document.getElementById("email");
let voornaam = document.getElementById("voornaam");
let achternaam = document.getElementById("achternaam");
let subdomein = document.getElementById("subdomein");
let domein = document.getElementById("domein");
let knop = document.getElementsByTagName("button")[0];
knop.addEventListener("click", splits);