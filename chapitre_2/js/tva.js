var prixHT = Number(prompt("Entrez le prix HT :"));
var taux = 19.6;
var tva = taux * (prixHT) / 100;
var prixTTC = (prixHT) + tva;
console.log("tva : " + tva);
console.log("prixHT : " + prixHT);
console.log("taux : " + taux);
console.log((prixHT));
console.log(prixTTC);
alert("Votre prix TTC est : " + prixTTC);