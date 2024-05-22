let size = function (){
    label.style.fontSize = sizes.value;
}

let font = function (){
    label.style.fontFamily = fonts.value;
}

let fonts = document.getElementById("font");
let sizes = document.getElementById("size");
let output = document.getElementById("output");
let text = document.createTextNode("Voorbeeld Tekst Om Te Laten Zien!")
let label = document.createElement("label");
label.appendChild(text);
label.style.fontFamily = "Arial";
label.style.fontSize = "8pt";;
output.appendChild(label);

fonts.addEventListener("change", font);
sizes.addEventListener("change", size);