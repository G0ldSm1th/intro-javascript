var Personnage = {
    //initialisation du personnage
    initPerso: function(nom, sante, force) {
        // body...
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        //L'inventaire est géré sous form d'une propriété de type objet
        this.inventaire = {
            or : 10,
            cle : 1
        };
    },
    //attaque  un personnage cible
    attaquer: function(cible) {
        // body...
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort...");
        }
    }
};

var joueur = Object.create(Personnage);
//on initialise le joueur
joueur.initJoueur = function(nom, sante, force) {
    // body...
    this.initPerso(nom, sante, force);
    this.xp = 0; // l'experience du joeur est toujorus initialisée à 0 
};
//renvoi la description du Personnage
joueur.decrire = function() {
    // body...
    var description =
        this.nom + " a " 
        + this.sante + " points de vie, " 
        + this.force + " points de force, " 
        + this.xp + " points d'experience, " 
        + this.inventaire.or + " pièces d'or et " 
        + this.inventaire.cle + " clé(s)";
    return description;
};

//Combat un adversaire
joueur.combattre = function(adversaire) {
    // body...
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom 
            + " a tué " 
            + adversaire.nom + " et gagne " 
            + adversaire.valeur + " points d'expérience, ainsi que " 
            + adversaire.inventaire.or + " pièces d'or et " 
            + adversaire.inventaire.cle + " clé(s)");
        this.xp += adversaire.valeur;
        this.inventaire.or += adversaire.inventaire.or;
        this.inventaire.cle += adversaire.inventaire.cle;
    }
}


var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function(nom, sante, force, race, valeur) {
    // body...
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
}


var joueur1 = Object.create(joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);


console.log(joueur1.decrire());
console.log(joueur2.decrire());