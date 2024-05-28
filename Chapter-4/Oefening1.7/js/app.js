let aantalgetallen = document.getElementById("inputbox")
let button = document.getElementById("button");

button.addEventListener("click" , genereergetallen)


function genereergetallen (){
    let getallen = "";
    let counter = 0;


    while (counter <= aantalgetallen.value){
        if (!(counter%2 === 0)){
            getallen += " " + counter;
        }
        counter++;
    }

    document.getElementById("outputbox").textContent = getallen
}