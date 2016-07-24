var Chien = {
    // initialise le chien
    init: function(nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function() {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
};


var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", "75");

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", "22");
var Medor = Object.create(Chien);
Medor.init("Médor", "Labrador", "58");


var chenil = [crokdur,pupuce,Medor];

console.log("Le chenil hébèrge " + chenil.length + " chiens(s)");

chenil.forEach(function(chien){
    //body...    
    console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm. il aboie : " + chien.aboyer());
}) 