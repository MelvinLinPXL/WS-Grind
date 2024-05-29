let opmaak1 = document.getElementById("button1")
let opmaak2 = document.getElementById("button2")

opmaak1.addEventListener("click" , style1)
opmaak1.addEventListener("click" , style2)


function style1() {
    document.body.className = 'style1'
}

function style2(){
    document.body.style.backgroundColor = "Red"
}