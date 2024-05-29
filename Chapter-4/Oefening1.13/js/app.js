let phrasebox = document.getElementById("inputphrase")
let filterbox = document.getElementById("inputfilter")
let button = document.getElementById("button")

button.addEventListener("click" , reverse)

function reverse(){

    let parent = document.getElementById("reversebox")
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }

    let woordenarray = phrasebox.value.split(" ");

    // remove all empty elements in an array
    woordenarray = woordenarray.filter(item => item.trim() !== "");

    let woordengefiltered = 0;

    for (let i = 1; i < woordenarray.length + 1; i++){

        if (woordenarray[woordenarray.length - i].includes(filterbox.value) && filterbox.value !== ""){
            woordengefiltered += 1;
        }else{

            let newelement = document.createElement("p")
            newelement.textContent = woordenarray[woordenarray.length - i] + " "
            newelement.style.backgroundColor = "red"
            newelement.style.display = "inline-block"
            newelement.style.margin = "10px"
            newelement.style.padding = "2px"

            document.getElementById("reversebox").appendChild(newelement)
        }


    }
    document.getElementById("outputbox").textContent = ` ${woordengefiltered} word(s) filtered`
}
