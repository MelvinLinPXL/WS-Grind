let getallen = function (){
    if (input.value === "" || input.value > 50 || input.value < 0){
        output.value = "Gelieve een correcte waarde in te geven!";
    } else {
        let eerste = 1;
        let laatste = input.value;
        if (laatste % 2 === 0){
            laatste -= 1;
            console.log("test");
        }
        let getal = "";
        while (laatste >= eerste) {
            console.log(eerste);
            console.log(laatste)
            getal += eerste.toString() + " ";
            eerste += 2;
        }
        output.value = getal;
    }
}

let input = document.getElementById("input");
let output = document.getElementById("output");
let knop = document.getElementsByTagName("button")[0];
knop.addEventListener("click", getallen);