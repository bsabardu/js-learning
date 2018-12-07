/*
var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

console.log(films.length); // Affiche 3

var tableauVide = []; // Création d'un tableau vide

console.log(tableauVide.length); // Affiche 0

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
} // Affiche la liste des films

films.forEach(function(film){
    console.log(film)
});

films.push("Les Bronzés"); //Ajoute un élément au tableau

films.forEach(function(film){
    console.log(film)
});

*/

const Film = {
    init : function(titre,anneeSortie){
        this.titre = titre;
        this.anneeSortie = anneeSortie;
    },

    decrire : function(){
        return this.titre + " (" + this.anneeSortie +")";
    }
}

const film1 = Object.create(Film);
film1.init("Le loup de Wall Street",2013);

const film2 = Object.create(Film);
film2.init("Vice-Versa",2015);

const film3 = Object.create(Film);
film3.init("Babysitting",2014);

const films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function(film){
    console.log(film.decrire())
});