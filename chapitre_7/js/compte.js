var compte = {
    titulaire: "Alex",
    solde: 0,

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


var MtCredit = Number(prompt("saisissez un montant à créditer"));
compte.crediter(MtCredit);
console.log(compte.decrire());

var MtDebit = Number(prompt("saisissez un montant à débiter"));
compte.debiter(MtDebit);
console.log(compte.decrire());