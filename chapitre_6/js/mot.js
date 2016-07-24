var mot = prompt("Saisissez votre mot");

function compterNbVoyelles(mot) {
    // body...
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {

        if (mot[i].toLowerCase() === "a" || mot[i].toLowerCase() === "e" || mot[i].toLowerCase() === "i" || mot[i].toLowerCase() === "o" || mot[i].toLowerCase() === "u" || mot[i].toLowerCase() === "y")
            nbVoyelles++;
    }
    return nbVoyelles;
}

var nbVoyelles = compterNbVoyelles(mot);
var nbConsonnes = mot.length - compterNbVoyelles(mot);


function inverser(mot) {
    // body...
    var motInverse = "";
    for (var i = mot.length - 1; i >= 0; i--) {
        motInverse += mot[i];
    }
    return motInverse;
}

function palindrome(mot) {
    // body...
    if (mot.toLowerCase() === inverser(mot).toLowerCase())
        return "c'est un palindrome";
    else
        return "ce n'est pas un palindrome";
}

function trouverLettreLeet(lettre) {
    // body...

    switch (lettre.toLowerCase()) {
        case "a":
            return "4";
        case "b":
            return "8";
        case "e":
            return "3";
        case "l":
            return "1";
        case "o":
            return "0";
        case "s":
            return "5";
    }
    return lettre;
}


function convertirEnLeetSpeak(mot) {
    // body...
    var motConverti = "";
    for (var i = 0; i < mot.length; i++) {
        motConverti += trouverLettreLeet(mot[i]);
    }
    return motConverti;
}




console.log("le mot " + mot + " contient " + mot.length + " caractère(s)");
console.log("il s'écrit en  minuscule " + mot.toLowerCase());
console.log("il s'écrit en  majuscule " + mot.toUpperCase());
console.log("il contient " + nbVoyelles + " voyelle(s) et " + nbConsonnes + " consonne(s)");
console.log("il s'écrit à l'envers " + inverser(mot));
console.log(palindrome(mot));
console.log("Il s'écrit en leet speak : " + convertirEnLeetSpeak(mot));