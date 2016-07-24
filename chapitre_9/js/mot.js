var mot = prompt("saisisez un mot");

var mots = [];
while (mot.toLowerCase() !== "stop") {
    mots.push(mot);
    mot = prompt("saisisez un mot");
};

mots.forEach(function(word) {
    console.log(word);

});