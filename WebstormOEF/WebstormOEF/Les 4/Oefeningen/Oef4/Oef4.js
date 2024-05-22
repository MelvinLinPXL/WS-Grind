function functieMetFouten() {
    /* Dit programma bevat fouten, verbeter ze */
    let teller = 0;
    let boodschap = "teller heeft waarde: ";
    boodschap += teller + `<br>`;
    teller += 10;
    if (teller > 5) {
        boodschap += `<b>Afgelopen</b>, met waarde: ` + teller;
        outputVeld = document.getElementById("output");
        label = document.createElement("label");
        tekst = document.createTextNode(boodschap);
        label.appendChild(tekst);
        outputVeld.appendChild(label);
    }
}
functieMetFouten();