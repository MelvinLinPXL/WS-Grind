let email = document.getElementById("emailadress")
let button = document.getElementById("button")

button.addEventListener("click" , splitting)

function splitting(){
    let naam = email.value.split('.')
    document.getElementById("naam").textContent = naam[0]
    let naam2 = naam[1].split('@')
    document.getElementById("naam2").textContent = naam2[0]
    document.getElementById("subdomein").textContent = naam2[1]
    document.getElementById("domein").textContent = naam [2]

}