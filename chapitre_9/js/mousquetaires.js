var mousquetaires = ["Athos", "Portos", "Aramis"];

console.log("Voici les troics mousquetaires !");

for (var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}


mousquetaires.push("d'Artagnan");
console.log("A present ils sont quatre !");

mousquetaires.forEach(function(mousquetaire) {
    //body...	
    console.log(mousquetaire);
});