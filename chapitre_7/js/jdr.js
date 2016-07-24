var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,

    //renvoi la description du personnage
    decrire: function() {
        // body...
        var description =
            this.nom + " a " + this.sante + " points de vie " + this.force + " points de force et " + this.xp + " points d'experience";
        return description;
    }
};

console.log(perso.decrire());

//aurora est bléssé par une flèche 
perso.sante = perso.sante - 20;

//Aurora atrouvé un bracelet de force 
perso.force = perso.force + 10;

//aurora apprend une nouvelle compétence
perso.xp = perso.xp + 10;


console.log(perso.decrire());