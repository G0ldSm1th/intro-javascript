var films = ["Le loup de Wall sStreet", "vice-versa", "Babysitting"];
console.log(films.length);
console.log(films[0]);
console.log(films[1]);
console.log(films[2]);


films.forEach(function(film) {
    // body...
    console.log(film);
});

films.push("Les Bronzés");

console.log(films[3]);