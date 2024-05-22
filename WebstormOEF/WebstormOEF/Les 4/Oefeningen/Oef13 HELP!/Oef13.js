let filter = function () {
    let phrase = document.getElementById("phrase").value;
    let words = phrase.split(" ");
    let filt = document.getElementById("filter");
    let teller = 0;
    if (filt === ""){
        filt = " ";
    }
        for (let i = words.length - 1; i >= 0; i--) {
            if (!(words[i].indexOf(filt.value) > -1)){
                console.log(words[i]);
                let text = document.createTextNode(words[i]);
                let label = document.createElement("label");
                label.appendChild(text);
                outputWords.appendChild(label);
                label.style.backgroundColor = "red";
                label.style.border = "dotted 2px red";
            } else {
                teller++;
            }
        }
        text = `${teller} word(s) filtered.`
}


let outputWords = document.getElementById("words");
let output = document.getElementById("output");
document.getElementsByTagName("button")[0].addEventListener("click", filter);