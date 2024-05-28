let button = document.getElementById("button")
let input = document.getElementById("input")

button.addEventListener("click" , tekenpyramide)

function tekenpyramide() {

    if (isNaN(input.value) || input.value > 10 || input.value < 2){

        document.getElementById("outputbox").textContent = "not a valid input"
    }else{
        let output = "";
        for (i = 0; i <= input.value; i++){

            let string  = "";
            for (j = 0; j<= i ; j++){

                string += "*"


            }
            output += string + "<br>";

        }
        // kan alleen maar met innerHTML want <br> en \n wordt alleen geinterpreteerd bij innerhtml
        // text content geeft alleenn literal text terug
        document.getElementById("outputbox").innerHTML = output;
    }

}