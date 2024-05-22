let bereken = function (){
    console.log("test2");
    if (eerste.value !== ""){
        let uitkomst = eerste.value * tweede.value;
        let text = document.createTextNode(uitkomst.toString());
        console.log(uitkomst);
        output.value = "";
        output.appendChild(text);
    }
}
console.log("test");
let eerste = document.getElementById("eerstegetal");
let tweede = document.getElementById("tweedeGetal");
let output = document.getElementById("output");
tweede.addEventListener("input", bereken);