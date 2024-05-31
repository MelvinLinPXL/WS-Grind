// de hekjes ### moet je nog vervangen door eigen code om het 
// programma werkend te krijgen
function hint() {
    let gebruikersnaam = document.getElementById("input_naam").value;
    let output = document.getElementById("div_output")

    fetch('http://localhost:3000/gebruiker/')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((personen) => {
            for(let persoon of personen){
                if (persoon.naam == gebruikersnaam){
                    let id = persoon.id

                    output.appendChild(document.createTextNode(`${item.naam}: ${item.nummerplaat}`))
                    let ul = document.createElement("ul")
                    output.appendChild(ul)

                    fetch(`http://localhost:3000/registratie?gebruiker_id=${id}`)
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw `error with status ${response.status}`;
                            }
                        }).then((registraties)=>{
                        for(let registratie of registraties){
                            let li = document.createElement("li")
                            ul.appendChild(li)
                            let tijd = new Date(registratie.tijd);

                            li.appendChild(document.createTextNode(tijd.toLocaleString("be-BE")))
                        }
                    })
                }


            }            
        })
        .catch((error) => {
            console.log(error);
        });
}

hint();
