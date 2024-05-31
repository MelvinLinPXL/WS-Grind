// naam: 

function geefRegistraties(){
    return [
        { id: 1, gebruiker_id : 1, tijd: 1681100000000 },
        { id: 2, gebruiker_id : 1, tijd: 1681200000000 },
        { id: 3, gebruiker_id : 2, tijd: 1691100000000 }                
  ]
}

function geefGebruikers(){
    return [
        { id: 1,  naam: "tim",    nummerplaat: "1-AQK-834" },
        { id: 2,  naam: "sofie",  nummerplaat: "TNA-665" },
        { id: 3,  naam: "tim",    nummerplaat: "0-CPM-771" }
    ]
}


window.addEventListener("load", loaded);

function loaded() {
    let filterknop = document.getElementById("button_toon_filter")
    let div = document.getElementById("div_filter")
    let verstopfilter = document.getElementById("button_verstop_filter")
    let registraties = document.getElementById("button_get_registraties")

    registraties.addEventListener("click" , getRegistraties)

    filterknop.addEventListener("click" , function() {
        div.style.display = "initial"
    })

    verstopfilter.addEventListener("click" , function() {
        div.style.display = "none"

    })
}

function getRegistraties(){
    let url = "http://localhost:3000/registratie/"
    let urlgebruikter = "http://localhost:3000/gebruiker"
    let geselecteerdepersoon = document.getElementById("input_naam")
    let output = document.getElementById("div_output")
    makeElementEmpty(output)

    fetch(urlgebruikter)
        .then((response) => {
            if (response.status == 200){
                return response.json()
            }else{
                throw `Error ${response.status}`
            }
        })
        .then((gebruiker) => {
            if (geselecteerdepersoon.value !== ""){
                gebruiker.forEach(selectedgebruiker => {
                    if (selectedgebruiker.naam == geselecteerdepersoon.value){

                        output.appendChild(document.createTextNode(`${selectedgebruiker.naam}: ${selectedgebruiker.nummerplaat}`))
                        let ul = document.createElement("ul")
                        output.appendChild(ul)
                        fetch(url + `?gebruiker_id=${selectedgebruiker.id}`)
                            .then((response) => {
                                if (response.status == 200){
                                    return response.json()
                                }else{
                                    throw `error ${response.status}`
                                }
                            })
                            .then((answer) => {
                                answer.forEach(item => {
                                    let li = document.createElement("li")
                                    ul.appendChild(li)
                                    let tijd = new Date(item.tijd);
                                    li.appendChild(document.createTextNode(tijd.toLocaleString("be-BE")))

                                })
                            })
                        {
                        }
                    }
                })

            }else{
                gebruiker.forEach(item => {

                    output.appendChild(document.createTextNode(`${item.naam}: ${item.nummerplaat}`))
                    let ul = document.createElement("ul")
                    output.appendChild(ul)

                    fetch(url)
                        .then((response) => {
                            if (response.status == 200){
                                return response.json()
                            }else{
                                throw `Error ${response.status}`
                            }
                        })
                        .then((registraties) => {
                            registraties.forEach(registratie => {
                                if (registratie.gebruiker_id == item.id){
                                    let li = document.createElement("li")
                                    ul.appendChild(li)
                                    let tijd = new Date(registratie.tijd);

                                    li.appendChild(document.createTextNode(tijd.toLocaleString("be-BE")))
                                }
                            })
                        })
                })

            }

        })
}


function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

