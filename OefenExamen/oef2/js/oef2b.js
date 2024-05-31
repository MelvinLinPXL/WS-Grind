// naam:

window.addEventListener("load", loaded);

function loaded() {
    let button = document.getElementById("button_nieuwe_gebruiker")
    button.addEventListener("click" , maakGebruiker)
}

function maakGebruiker(){
    url = "http://localhost:3000/gebruiker/"
    let allinputs = document.querySelectorAll("input")
    let naam = allinputs.item(0).value;
    let nummerplaat =allinputs.item(1).value;
    let output = document.getElementById("div_output")
    makeElementEmpty(output)
    if (naam.length > 2 && nummerplaat.length > 2){
        let gebruiker = {naam: naam , nummerplaat: nummerplaat }
        fetch(url,
            {
                method: "POST",
                body: JSON.stringify(gebruiker),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (response.status == 201) {
                    return response.json();
                } else {
                    throw `error with status ${response.status}`;
                }
            })
            .then((jsonResponse) =>{
              let id = jsonResponse.id
              output.appendChild(document.createTextNode(`Aangemaakt: ${id} ${gebruiker.naam} , ${gebruiker.nummerplaat}`))

            })
            .catch((error) => {
                output.appendChild(document.createTextNode(error));
            });
    }else{
        output.appendChild(document.createTextNode("foutieve ingave"))
    }

}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

