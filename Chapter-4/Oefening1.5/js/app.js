document.addEventListener('DOMContentLoaded', function() {
    // Initialize variables after DOM is fully loaded
    let variable1 = document.getElementById("input1");
    let variable2 = document.getElementById("input2");
    let output = document.getElementById("outputbox");

    function bereken() {
            // isNaN stands for is not a number !isNaN checks if the variable is a number
        if (!isNaN(variable1.value) && !isNaN(variable2.value)){
            // Calculate the product of the two input values
            let sum = variable2.value * variable1.value;
            // Display the result in the output element
            output.value = `het product van ${variable1.value } en ${variable2.value } is ${sum}`;
        }else{
            output.value = "U geeft geen geldige getallen in"
        }
    }

    // Add event listener to the button
    document.getElementById("berekenbutton").addEventListener("click", bereken);

    // Input is wanneer een variable in de 2 de variable box wordt gezet meteen de functie calls
    // document.getElementById("input2").addEventListener("input", bereken);

});
