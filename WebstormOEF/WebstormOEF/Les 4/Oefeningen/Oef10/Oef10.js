let genereer = function (){
    let afdruk = "is de ";
    switch (input.value.toLowerCase()){
        case "maandag":
            afdruk += "eerste";
            break;
        case "dinsdag":
            afdruk += "tweede";
            break;
        case "woensdag":
            afdruk += "derde";
            break;
        case "donderdag":
            afdruk += "vierde";
            break;
        case "vrijdag":
            afdruk += "vijfde";
            break;
        case "zaterdag":
            afdruk += "zesde";
            break;
        case "zondag":
            afdruk += "zevende";
            break;
        default:
            afdruk += "niet bestaande"
    }
    afdruk += " dag van de week";
    output.value = afdruk;
}

let input = document.getElementById("input");
let output = document.getElementById("output");
let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", genereer);