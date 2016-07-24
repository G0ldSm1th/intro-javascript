var CompteBancaire = {

    initCB: function(titulaire, solde) {
        // body...
        this.titulaire = titulaire;
        this.solde = solde;
    },
    crediter: function(credit) {
        // body...
        return this.solde += credit;
    },
    debiter: function(debit) {
        // body...
        return this.solde -= debit;
    },
    decrire: function() {
        // body...
        return "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
    }
};


var CompteEpargne = Object.create(CompteBancaire);
CompteEpargne.initCE = function(titulaire, solde, interets) {
    // body...
    this.initCB(titulaire, solde);
    this.interets = interets;
}

CompteEpargne.ajouterInterets = function() {
    // body...
    this.solde += this.solde * this.interets;
}

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état des comptes");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes : "));
compte1.debiter(montant);
compte2.crediter(montant);

//Calclul et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts");

console.log(compte1.decrire());
console.log(compte2.decrire());