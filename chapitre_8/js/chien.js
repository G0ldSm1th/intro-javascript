var Chien = {

    init: function(nom, race, taille) {
        // body...
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },

    aboyer: function() {
        // body...
        if (this.taille <= 22)
            return "Kaii !! Kaii !";
        else
            return "Grr !! Grrr !!! ";
    }

};


var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());