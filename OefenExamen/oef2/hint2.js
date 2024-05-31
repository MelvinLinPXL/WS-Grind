// de hekjes ### moet je nog vervangen door eigen code om het 
// programma werkend te krijgen
function hint() {
    fetch('http://localhost:3000/gebruiker/')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((personen) => {
            for(let persoon of personen){
                let id = ###
                fetch(`http://localhost:3000/registratie?gebruiker_id=${id}`).then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw `error with status ${response.status}`;
                    }
                }).then((registraties)=>{
                    console.log(###,###);
                    for(let registratie of registraties){
                        console.log(###);
                    }                    
                })  
            }            
        })
        .catch((error) => {
            console.log(error);
        });
}

hint();
