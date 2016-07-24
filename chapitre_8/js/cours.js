var unObjet = {
    a:2
};

//créée un autre objet avec unObjet comme prototype
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // affiche 2
console.log(unAutreObjet.b); // affiche 2