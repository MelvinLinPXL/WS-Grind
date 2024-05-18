/**/

/*(3) Schrijf een programma dat een schaakbord afdrukt. De grootte van het schaakbord
wordt in de variabele grootte bewaard. Het bord wordt voorgesteld door afwisselend het
symbool '#' of een spatie.
let grootte = 8 ;
 */

let groote = 8;
let bord = "";

for (let i = 0; i < groote ; i++){

    for (let j = 0; j < groote ;j++){
        if ((i + j) % 2 === 1){
            bord += "#"
        }else{
            bord += " ";
        }
    }
    bord += "\n";
}
console.log(bord)