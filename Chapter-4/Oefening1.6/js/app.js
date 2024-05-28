let voornaam = document.getElementById("voornaam")
let achternaam = document.getElementById("achternaam")
let button = document.getElementById("button")

button.addEventListener("click", melding);



function melding(){
    // ` ` gebruik maken om variables in te steken in plaats van " "
    if ( voornaam.value === "" || achternaam.value === "") {
        document.getElementById("outputbox").textContent = "Vul alle velden in, a.u.b"
    }else{
        document.getElementById("outputbox").textContent = `Welkom ${voornaam.value} ${achternaam.value}`
    }
}