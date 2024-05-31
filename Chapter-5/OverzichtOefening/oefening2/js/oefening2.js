//Naam:

const handleWindowLoad = function() {
    let button = document.getElementById("olodsKnop")
    let selected = document.getElementById("select_traject")

    for (let i = 1 ;i< 4; i++) {
        let option = document.createElement("option")
        option.value = i
        option.appendChild(document.createTextNode(`trajectschijf ${i}`))
        selected.appendChild(option)
    }
    button.addEventListener("click" , handleOlodsKnopClick)
};

function handleOlodsKnopClick() {
    let url='http://localhost:3000/olods/?trajectschijf=';
    let selected = document.getElementById("select_traject")
    let output = document.querySelector("output")
    makeElementEmpty(output)
    let ul = document.createElement("ul")
    output.appendChild(ul)

    fetch(url + selected.value)
        .then((response) => {
            if (response.status == 200){
                return response.json()
            }else{
                throw `error status ${response.status}`
            }
        })
        .then((arrayvanvakken) =>{
            let smalleststudiepunten = Math.min(...arrayvanvakken.map(item => item.studiepunten));

            arrayvanvakken.forEach(item => {
                let li = document.createElement("li")
                let textcontent = document.createTextNode(`${item.id}, ${item.naam}, ${item.studiepunten}`)
                if (item.studiepunten === smalleststudiepunten){
                    li.style.color = "green"
                }
                li.appendChild(textcontent)
                ul.appendChild(li)
            })
        })
}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

window.addEventListener("load", handleWindowLoad);