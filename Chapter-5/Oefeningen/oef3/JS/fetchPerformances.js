'use strict'
//mijn code

window.addEventListener("load", init);
function init() {
    let getallperf = document.getElementById("button_get_all_performances")
    let getallperfdate = document.getElementById("button_get_all_performances_date")
    let getperformanceid = document.getElementById("button_get_performance")
    let postperformance = document.getElementById("button_post_performance")


    getallperf.addEventListener("click" , handleGetAllPerformances)
    getallperfdate.addEventListener("click" , handleGetAllPerformancesByDate)
    getperformanceid.addEventListener("click" , handleGetPerformance)
    postperformance.addEventListener("click", handlePostPerformance)
}



function handleGetAllPerformances() {

    let url = 'http://localhost:3000/performances/';
    let output = document.getElementById("div_output")
    makeElementEmpty(output)

    let table = document.createElement("table")
    output.appendChild(table)

    let thead = document.createElement("thead")
    table.appendChild(thead)
    let trhead = document.createElement("tr")
    thead.appendChild(trhead)

    let naamperformance = document.createElement("td")
    let playdateperformance = document.createElement("td")
    let descriptionperformance = document.createElement("td")

    naamperformance.textContent = "Naam"
    playdateperformance.textContent = " Datum"
    descriptionperformance.textContent = "Description"

    trhead.appendChild(naamperformance)
    trhead.appendChild(playdateperformance)
    trhead.appendChild(descriptionperformance)

    let tbody = document.createElement("tbody")
    table.appendChild(tbody)


    fetch(url)
        .then((response) => {
            if (response.status === 200){
                return response.json()
            }else{
                throw `error ${response.status}`
            }

        })
        .then((performances) =>{
            performances.forEach(item =>{
                let performancerow = document.createElement("tr")
                let naamperformance = document.createElement("td")
                let playdateperformance = document.createElement("td")
                let descriptionperformance = document.createElement("td")

                naamperformance.textContent = item.name
                playdateperformance.textContent = item.play_date
                descriptionperformance.textContent = item.description

                performancerow.appendChild(naamperformance)
                performancerow.appendChild(playdateperformance)
                performancerow.appendChild(descriptionperformance)

                tbody.appendChild(performancerow)
            })

        })
    
}

function handleGetAllPerformancesByDate() {
    
    let url = 'http://localhost:3000/performances/';
    let selecteddatum = document.getElementById("asked_date")

    let output = document.getElementById("div_output")
    makeElementEmpty(output)

    let table = document.createElement("table")
    output.appendChild(table)

    let thead = document.createElement("thead")
    table.appendChild(thead)
    let trhead = document.createElement("tr")
    thead.appendChild(trhead)

    let naamperformance = document.createElement("td")
    let playdateperformance = document.createElement("td")
    let descriptionperformance = document.createElement("td")

    naamperformance.textContent = "Naam"
    playdateperformance.textContent = " Datum"
    descriptionperformance.textContent = "Description"

    trhead.appendChild(naamperformance)
    trhead.appendChild(playdateperformance)
    trhead.appendChild(descriptionperformance)

    let tbody = document.createElement("tbody")
    table.appendChild(tbody)


    fetch(url)
        .then((response) => {
            if (response.status === 200){
                return response.json()
            }else{
                throw `error ${response.status}`
            }

        })
        .then((performances) =>{
            performances.forEach(item =>{

                if (item.play_date === selecteddatum.value){
                    let performancerow = document.createElement("tr")
                    let naamperformance = document.createElement("td")
                    let playdateperformance = document.createElement("td")
                    let descriptionperformance = document.createElement("td")

                    naamperformance.textContent = item.name
                    playdateperformance.textContent = item.play_date
                    descriptionperformance.textContent = item.description

                    performancerow.appendChild(naamperformance)
                    performancerow.appendChild(playdateperformance)
                    performancerow.appendChild(descriptionperformance)

                    tbody.appendChild(performancerow)
                }

            })

        })

    
}
function handleGetPerformance() {
    let url = 'http://localhost:3000/performances/';
    let selectedid = document.getElementById("txt_id")

    let output = document.getElementById("div_output")
    makeElementEmpty(output)

    let table = document.createElement("table")
    output.appendChild(table)

    let thead = document.createElement("thead")
    table.appendChild(thead)
    let trhead = document.createElement("tr")
    thead.appendChild(trhead)

    let naamperformance = document.createElement("td")
    let playdateperformance = document.createElement("td")
    let descriptionperformance = document.createElement("td")

    naamperformance.textContent = "Naam"
    playdateperformance.textContent = " Datum"
    descriptionperformance.textContent = "Description"

    trhead.appendChild(naamperformance)
    trhead.appendChild(playdateperformance)
    trhead.appendChild(descriptionperformance)

    let tbody = document.createElement("tbody")
    table.appendChild(tbody)


    fetch(url)
        .then((response) => {
            if (response.status === 200){
                return response.json()
            }else{
                throw `error ${response.status}`
            }

        })
        .then((performances) =>{

            performances.forEach(item =>{

                if (item.id == selectedid.value){
                    let performancerow = document.createElement("tr")
                    let naamperformance = document.createElement("td")
                    let playdateperformance = document.createElement("td")
                    let descriptionperformance = document.createElement("td")

                    naamperformance.textContent = item.name
                    playdateperformance.textContent = item.play_date
                    descriptionperformance.textContent = item.description

                    performancerow.appendChild(naamperformance)
                    performancerow.appendChild(playdateperformance)
                    performancerow.appendChild(descriptionperformance)

                    tbody.appendChild(performancerow)
                }

            })

        })


}



function handlePostPerformance() {
    let url = 'http://localhost:3000/performances/';
    let naam = document.getElementById("txt_name").value;
    let datum = document.getElementById("txt_date").value;
    let description = document.getElementById("txt_descr").value;

    let performance = {name:naam ,play_date:datum ,description:description}

    fetch(url,
        {
            method: "POST",
            body: JSON.stringify(performance),
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
        .catch((error) => {
            output.appendChild(document.createTextNode(error));
        });
    
}


function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

/*

De geoptimiseerde code van ChatGPT ik heb gewoon gevraagd
dat die de redundant code creatie van table in een aparte functie zet

'use strict';
window.addEventListener("load", init);

function init() {
    let getallperf = document.getElementById("button_get_all_performances");
    let getallperfdate = document.getElementById("button_get_all_performances_date");
    let getperformanceid = document.getElementById("button_get_performance");
    let postperformance = document.getElementById("button_post_performance");

    getallperf.addEventListener("click", handleGetAllPerformances);
    getallperfdate.addEventListener("click", handleGetAllPerformancesByDate);
    getperformanceid.addEventListener("click", handleGetPerformance);
    postperformance.addEventListener("click", handlePostPerformance);
}

function createTable(headers, rows) {
    let output = document.getElementById("div_output");
    makeElementEmpty(output);

    let table = document.createElement("table");
    output.appendChild(table);

    let thead = document.createElement("thead");
    table.appendChild(thead);
    let trhead = document.createElement("tr");
    thead.appendChild(trhead);

    headers.forEach(headerText => {
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(headerText));
        trhead.appendChild(th);
    });

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    rows.forEach(rowData => {
        let tr = document.createElement("tr");
        rowData.forEach(cellData => {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(cellData));
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

function handleGetAllPerformances() {
    let url = 'http://localhost:3000/performances/';

    fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw `error ${response.status}`;
            }
        })
        .then(performances => {
            let headers = ["Naam", "Datum", "Description"];
            let rows = performances.map(item => [item.name, item.play_date, item.description]);
            createTable(headers, rows);
        });
}

function handleGetAllPerformancesByDate() {
    let url = 'http://localhost:3000/performances/';
    let selectedDatum = document.getElementById("asked_date").value;

    fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw `error ${response.status}`;
            }
        })
        .then(performances => {
            let filteredPerformances = performances.filter(item => item.play_date === selectedDatum);
            let headers = ["Naam", "Datum", "Description"];
            let rows = filteredPerformances.map(item => [item.name, item.play_date, item.description]);
            createTable(headers, rows);
        });
}

function handleGetPerformance() {
    let url = 'http://localhost:3000/performances/';
    let selectedId = document.getElementById("txt_id").value;

    fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw `error ${response.status}`;
            }
        })
        .then(performances => {
            let filteredPerformances = performances.filter(item => item.id == selectedId);
            let headers = ["Naam", "Datum", "Description"];
            let rows = filteredPerformances.map(item => [item.name, item.play_date, item.description]);
            createTable(headers, rows);
        });
}

function handlePostPerformance() {
    let url = 'http://localhost:3000/performances/';
    let naam = document.getElementById("txt_name").value;
    let datum = document.getElementById("txt_date").value;
    let description = document.getElementById("txt_descr").value;
    let output = document.getElementById("div_output");

    let performance = { name: naam, play_date: datum, description: description };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(performance),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.status == 201) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then(data => {
            output.appendChild(document.createTextNode("Performance added successfully."));
        })
        .catch(error => {
            output.appendChild(document.createTextNode(error));
        });
}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}
*/

