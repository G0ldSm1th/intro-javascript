/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var rep;
var i = 1;
while (i < 7) {
    rep = Number(prompt("Entrez un chiffre"));
    if (rep === solution) {
        console.log("Bravo la solution était " + solution);
        console.log("Vous avez trouvé en " + i + " essais");
        i = 7;
    } else {
        if (rep < solution) {
            console.log(rep + " est trop petit");
        } else if (rep > solution) {
            console.log(rep + " est trop grand");
        } else {
            console.log("le nombre est incorrect");
        }
        i++;
    }
}
if (i === 7 && rep !== solution) {
    console.log("Perdu...La solution était " + solution);
}