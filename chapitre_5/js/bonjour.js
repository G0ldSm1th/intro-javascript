function direBonjour(prenom, nom) {
    // body...
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var prenom = prompt("Saisissez votre prénom");
var nom = prompt("Saisissez votre nom");

console.log(direBonjour(prenom,nom));