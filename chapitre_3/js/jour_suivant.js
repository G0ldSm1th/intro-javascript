var jour = prompt("entrez un jour");

switch (jour) {
    case "lundi":
        console.log("demain est mardi");
        break;
    case "mardi":
        console.log("demain est mercredi");
        break;
    case "mercredi":
        console.log("demain est jeudi");
        break;
    case "jeudi":
        console.log("demain est vendredi");
        break;
    case "vendredi":
        console.log("demain est samedi");
        break;
    case "samedi":
        console.log("demain est dimanche");
        break;
    default:
        console.log("jour incorrect");
}