let voornaam = document.getElementById("voornaam")
let achternaam = document.getElementById("achternaam")
let adres = document.getElementById("adres")
let buttons = document.querySelectorAll('button');


voornaam.value = "voornaam"
achternaam.value = "achternaam"
adres.value = "adres";

[voornaam, achternaam, adres].forEach(input => {
    input.addEventListener("mousedown", function() {
        this.value = "";
    });
});


buttons[1].addEventListener("click" , wissen)
buttons[0].addEventListener("click" , verzenden)
buttons[2].addEventListener("click" , wijzigen)

function wijzigen(){

}

function verzenden  (){

}

function wissen (){

}