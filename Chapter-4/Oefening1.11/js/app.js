let lettersize = document.getElementById("size-select")
let font = document.getElementById("font-select")
let outputtext = document.getElementById("example-text")

lettersize.addEventListener("change" , lettersizechanged)
font.addEventListener("change" , fontchanged)

function lettersizechanged (){
    outputtext.style.fontSize = lettersize.value
}

function fontchanged (){
    outputtext.style.fontFamily = font.value
}