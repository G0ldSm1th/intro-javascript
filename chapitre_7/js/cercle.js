var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {};
cercle.rayon = r;

cercle.perimetre = function() {
    // body...
    return 2 * Math.PI * this.rayon;
};

cercle.aire = function() {
    // body...
    return Math.PI * this.rayon * this.rayon;
};

console.log("son périmètre vaut : " + cercle.perimetre());
console.log("Son aire vaut : " + cercle.aire());