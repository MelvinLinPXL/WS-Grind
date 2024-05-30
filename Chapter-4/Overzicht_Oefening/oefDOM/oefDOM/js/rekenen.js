// naam: 

// hint: if( ! /^\d+$/.test(ingave) )

window.addEventListener("load", handleLoad);

function handleLoad () {
	let button_start_rekenen = document.getElementById("button_start_rekenen");
	button_start_rekenen.addEventListener("click",handleClick );
}

function handleClick () {

	let ingave = document.getElementById("input_aantal").value
	let output = document.querySelector("output")

	if( ! /^\d+$/.test(ingave)){
		let text = document.createElement("p")
		text.value = "misse ingave voor aantal"
		document.querySelector("output").value = text.value

	}else{
		for (let i = 0; i < ingave; i++){

			let getal1=parseInt(10*Math.random());
			let getal2=parseInt(10*Math.random());

			let oefening = document.createElement("div")
			oefening.value = `${getal1} * ${getal2} = `

			let inputbox = document.createElement("input")
			let head = document.createElement("hr")

			inputbox.type = "text"
			inputbox.id = `inputbox${i}`;

			inputbox.addEventListener("keyup" , handleKeyupInput);

			output.append(head)
			head.append(oefening.value)
			head.append(inputbox)

		}
	}
}

function handleKeyupInput(event){
	let selectedinputbox = event.target

	if (! /^\d+$/.test(selectedinputbox.value)){
		selectedinputbox.style.color = "red"
	}
}

