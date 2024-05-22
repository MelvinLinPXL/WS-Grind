let opmaak1 = function() {
    h1.style.textAlign = "center";
    h1.style.color = "palegreen";

    div.style.color = "yellow";
    div.style.margin = "10%";

    h2.style.fontSize = "12pt";
    h2.style.color = "greenyellow";

    body.style.backgroundColor = "darkolivegreen";

    button1.style.backgroundColor = "green";
    button2.style.backgroundColor = "green";
    button1.style.color = "white";
    button2.style.color = "white";
};

let opmaak2 = function() {
    h1.style.textAlign = "right";
    h1.style.color = "red";

    div.style.color = "pink";
    div.style.margin = "2%";

    h2.style.fontSize = "24pt";
    h2.style.color = "orange";

    body.style.backgroundColor = "lightblue";

    button1.style.backgroundColor = "darkblue";
    button2.style.backgroundColor = "darkblue";
};

let h1 = document.querySelector("h1");
let div = document.querySelectorAll("div")[0];
let h2 = document.querySelectorAll("h2")[0];
let body = document.body;
let button1 = document.getElementsByTagName("button")[0];
let button2 = document.getElementsByTagName("button")[1];

opmaak1();

button1.addEventListener("click", opmaak1);
button2.addEventListener("click", opmaak2);