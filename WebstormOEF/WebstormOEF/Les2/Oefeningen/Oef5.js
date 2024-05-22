function maakRij(min, max, arg)
{
    let getallen = [];
    let teller = min;
    if (arg === 0){
        return "Stap kan niet 0 zijn!";
    }
    if (min > max){
        while (teller >= max) {
            getallen.push(teller);
            teller += arg;
        }
    } else {
        while (teller <= max) {
            getallen.push(teller);
            teller += arg;
        }
    }
    return getallen;
}

console.log(maakRij(1, 9, 2))
console.log(maakRij(11, 1, -2))