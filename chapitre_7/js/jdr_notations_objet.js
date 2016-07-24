var perso = {};
perso.nom = "Aurora";
perso.sante = 150;
perso.force = 25;

perso.decrire = function() {
    // body...
    var description = this.nom + " a " + this.sante + " points de sante et " + this.force + " points de force";
    return description;
}


//================================================
// Autre notation
//================================================


var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,

    //renvoi la description du personnage
    decrire: function() {
        // body...
        var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " points de force";
        return description;
    }
};


console.log(perso.decrire());

//aurora est bléssé par une flèche 
perso.sante = perso.sante - 20;

//Aurora atrouvé un bracelet de force 
perso.force = perso.force + 10;

console.log(perso.decrire());