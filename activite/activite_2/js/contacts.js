Contact = {
    init: function(nom, prenom) {
        // body...
        this.nom = nom;
        this.prenom = prenom;
    },
    afficherContact: function() {
        // body...
        console.log("Nom : " + this.nom + ", prénom : " + this.prenom);
    }
};

Gestionnaire = {
    //Le tableau qui contiendra tous les contacts du gestionnaire
    tabContacts: tabContacts = [],

    ajouterContact: function(nom, prenom) {
        contact = Object.create(Contact);
        contact.init(nom, prenom);
        this.tabContacts.push(contact);
    },

    afficherContacts: function() {
        console.log("Voici la liste de tous vos contacts");
        this.tabContacts.forEach(function(contact) {
            contact.afficherContact();
        })
    },

    gererMenu: function function_name() {
        console.log("Bienvenue dans le gestionnaire de contacts !");
        optionChoisie = null;
        while (optionChoisie !== 0) {
            console.log("1 : Lister les contacts \n 2 : Ajouter un contacts \n 0 : Quitter");
            optionChoisie = Number(prompt("Choisissez une option"));
            if (optionChoisie !== 1 && optionChoisie !== 2 && optionChoisie !== 0) {
                console.log("Ceci n'est pas une option valide !");
            } else if (optionChoisie === 1) {
                this.afficherContacts();
            } else if (optionChoisie === 2) {
                //sinon on ajout un nouveau contact
                nom = prompt("Entrez le nom du nouveau contact : ");
                prenom = prompt("Entrez le prénom du nouveau contact : ");
                this.ajouterContact(nom, prenom);
                console.log("Le nouveau contact a été ajouté");
            }
        }
    }
}
gestionnaire = Object.create(Gestionnaire);
gestionnaire.ajouterContact("Lévisse", "Carole");
gestionnaire.ajouterContact("Nelsonne", "Mélodie");
gestionnaire.gererMenu();