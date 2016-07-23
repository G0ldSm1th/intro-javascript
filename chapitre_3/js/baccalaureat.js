var note = prompt("entrez votre moyenne");

if (note >= 10 && note < 12) {
    console.log("le candidat est reçu");
} else if (note < 10) {
    console.log("le candidat est recalé");
} else if (note > 11) {
    console.log("le candidat est reçu avec mention");
}
else{
    console.log("chiffre incorrect");
}