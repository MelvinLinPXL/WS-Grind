let teken = function (){
    let rijen = input.value;
    let text = "";
    if (rijen === "" || rijen > 10 || rijen < 2){
        text = "Gelieve een correct getal in te geven!";
    } else {
        for (let i = 0; i <= rijen; i++) {
            for (let j = 0; j < i; j++) {
                text += "* ";
            }
            text += "\n";
        }
    }
    console.log(text);
    let lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
        let line = document.createTextNode(lines[i]);
        output.appendChild(line);
        if (i < lines.length - 1){
            output.appendChild(document.createElement("br"));
        }
    }
}

let input = document.getElementById("input");
let output = document.getElementById("output");
let knop = document.getElementsByTagName("button")[0];
knop.addEventListener("click", teken);