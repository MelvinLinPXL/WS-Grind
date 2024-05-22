const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let keys = [];

for (let key in MOUNTAINS[0]){
    keys.push(key);
}

let outputVeld = document.getElementById("mountains");
let table = document.createElement("table");
let thead = document.createElement("thead");



for (let key of keys){
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    thead.appendChild(th);
}

table.appendChild(thead);
for (let mountain of MOUNTAINS){
    let tr = document.createElement("tr");
    for (let key of keys){
        let td = document.createElement("td");
        let tekst = document.createTextNode(mountain[key]);
        if (typeof mountain[key] =='number'){
            td.style.textAlign='right';
        }
        td.appendChild(tekst);
        tr.appendChild(td);
    }
table.appendChild(tr);
}
outputVeld.appendChild(table);