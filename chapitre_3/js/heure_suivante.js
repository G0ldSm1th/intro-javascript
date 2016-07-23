var heures = Number(prompt("entrez les heures"));
var minutes = Number(prompt("entrez les minutes"));
var secondes = Number(prompt("entrez les secondes"));

if (secondes + 1 === 60) {
    secondes = 0;
    if (minutes + 1 === 60) {
        minutes = 0;
        if (heures + 1 === 24) {
            heures = 0;
        } else {
            heures++;
        }
    } else {
        minutes++;
    }
} else {
    secondes++;
}
console.log("Il sera :" + heures + "h" + minutes + "min" + secondes + "sec");