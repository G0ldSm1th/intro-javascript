// var mot = prompt("saisisez un mot");

// var mots = [];
// while (mot.toLowerCase() !== "stop") {
//     mots.push(mot);
//     mot = prompt("saisisez un mot");
// };

// mots.forEach(function(word) {
//     console.log(word);

// });



var a = {
    prop1: "toto"
};
var b = Object.create(a);
b.prop2 = "titi";
var c = Object.create(b);
c.prop3 = "tutu";
console.log(c.prop1);