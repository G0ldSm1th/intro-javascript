var chien ={};
chien.nom ="Crockdur";
chien.race ="mâtin de Naples";
chien.taille ="75";

chien.aboyer = function () {
	// body...
	return "Grrr !! Grrr !";
}

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens un chat ! " + chien.nom + " aboie : " + chien.aboyer());