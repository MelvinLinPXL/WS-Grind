window.addEventListener("load", loaded);

function loaded() {
    let divOutput = document.getElementById("div_output");
    let divSelect = document.getElementById("div_select");
    let urlPersons = 'http://localhost:3000/persons/';
    makeElementEmpty(divOutput);
    makeElementEmpty(divSelect);
    fetch(urlPersons)
        .then((response) => {
            if (response.status === 200){
                return response.json();
            }else{
                throw `error with status ${response.status}`;
            }
        })
        .then((persons) => {
            divSelect.appendChild(makeSelect(persons));
        })
        .catch((error) => {
            divOutput.appendChild(document.createTextNode(error));
        });
        
}

let zoekvrienden = document.getElementById("get_friends")
zoekvrienden.addEventListener("click" , handleGetFriends)

let postpersoon = document.getElementById("button_post_person")
postpersoon.addEventListener("click", handlePostPerson)


function handleGetFriends() {
    let url = 'http://localhost:3000/persons/';
    let select = document.getElementById("select_id");
    let output = document.getElementById("div_output");

    fetch(url + select.value)
        .then((response) => {
            if (response.status == 200) {
                return response.json();
            }else{
                throw `error with status ${response.status}`;
            }
        })
        .then((person) => {

            // person is niet een array van id's person[2] is
            let friends = person.friends;
            output.textContent = `${person.name} heeft vrienden `
            friends.forEach(item => {

                fetch(url + item)
                    .then((response =>{
                        if (response.status === 200 ) {
                            return response.json();
                        }else{
                            throw `error with status ${response.status}`
                        }
                    })) // persoon is een single persoon met id
                    .then((eenpersoon) => {
                        // deze if statemnet is gewoon voor de comma; alleen een comma als het niet de laatste vriend is
                        if (item !== friends[friends.length - 1]){
                            output.textContent += eenpersoon.name + ", "
                        }else{
                            output.textContent += eenpersoon.name
                        }
                    })

            })

            output.textContent = persoon

        }).catch((error) => {
            divOutput.appendChild(document.createTextNode(error));

        });

}

function handlePostPerson() {
    let url = 'http://localhost:3000/persons/';
    let output = document.getElementById("div_output");
    let naam = document.getElementById("txt_name").value;

    person = {naam: naam , friends: []}

    fetch(url,
        {
            method: "POST",
            body: JSON.stringify(person),
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

function makeSelect(persons) {
    let select = document.createElement('select');
    select.setAttribute('id', 'select_id');
    for (let person of persons) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(person.name));
        option.setAttribute('value', person.id);

        select.appendChild(option);
    }
    return select;
}

