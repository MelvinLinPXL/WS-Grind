let datum = document.getElementById("datum")
let button = document.getElementById("button")
let output = document.getElementById("output")

button.addEventListener("click", tekst)

function tekst() {
    let day = datum.value.toLowerCase(); // Convert the input value to lowercase for case-insensitive comparison
    switch (day) {
        case "maandag":
            output.textContent = "is de eerste dag van de week";
            break;
        case "dinsdag":
            output.textContent = "is de tweede dag van de week";
            break;
        case "woensdag":
            output.textContent = "is de derde dag van de week";
            break;
        case "donderdag":
            output.textContent = "is de vierde dag van de week";
            break;
        case "vrijdag":
            output.textContent = "is de vijfde dag van de week";
            break;
        case "zaterdag":
            output.textContent = "is de zesde dag van de week";
            break;
        case "zondag":
            output.textContent = "is de zevende dag van de week";
            break;
        default:
            output.textContent = "is geen geldige dag";
    }
}
