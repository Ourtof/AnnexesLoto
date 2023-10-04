function tirage() {

    let tirages = [];
    let nbTirageOk = 0;

    while (nbTirageOk < 5) {
        let temp = Math.floor(Math.random() * 49);

        if (!tirages.includes(temp)) {
            tirages[nbTirageOk] = temp;
            nbTirageOk++;
        }
    }

    tirages[nbTirageOk] = Math.floor(Math.random() * 9);

    return tirages;
}

let tirageLoto = tirage();
console.log(tirageLoto);