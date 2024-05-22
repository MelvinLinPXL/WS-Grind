'use strict';

let paragraaf = document.getElementsByTagName("p");
let tekst = Array.from(paragraaf);
for (let i = 0; i < tekst.length; i++) {
    console.log(tekst[i].firstChild.nodeValue);
}
//je mag geen gebruik maken van textcontent, innerhtml of innertext

//verander de href van a in hln.be
let link = document.getElementsByTagName("a")[0];
link.href="https://www.hln.be";

//Zet in het output veld met class 'inputveld' een input met als label: 'geef je mening'
let inputVeld = document.getElementsByClassName("inputveld")[0];
let input = document.createElement("input");
input.setAttribute("name", "mening");
let label = document.createElement("label");
label.setAttribute("for", "mening");
tekst = document.createTextNode("Geef je mening ");
label.appendChild(tekst);
inputVeld.appendChild(label);
inputVeld.appendChild(input);

//Zet in het output veld met id 'outputveld' de tekst: 'bedankt voor de deelname
let outputVeld = document.getElementById("outputveld");
let label2 = document.createElement("label2");
tekst = document.createTextNode("Bedankt voor je deelname");
label2.appendChild(tekst);
outputVeld.appendChild(label2);


//extra: zorg dat alle p's als tekstkleur groen hebben.