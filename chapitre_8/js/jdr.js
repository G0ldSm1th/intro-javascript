var Personnage = {
    //initialisation du personnage
    initPerso: function(nom, sante, force) {
        // body...
        this.nom = nom;
        this.sante = sante;
        this.force = force;
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
        this.nom + " a " + this.sante + " points de vie " + this.force + " points de force et " + this.xp + " points d'experience";
    return description;
};


var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function(nom, sante, force, race, valeur) {
    // body...
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
}


var joueur1 = Object.create(joueur);
joueur1.initJoueur("Aurora",150,25);

var joueur2 = Object.create(joueur);
joueur2.initJoueur("Glacius",130,30);

console.log("Bienvenue dnas ce jeu d'aventure ! voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog",40,20,"orc",10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);


