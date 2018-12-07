const Personnage = {
    //Initialise le perso
    initPerso : function(nom,sante,force){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    }, 

    //Methode : Attaquer
    attaquer : function(cible){
        if (this.sante > 0){
            const degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégats.");
            cible.sante = cible.sante - degats;
           if (cible.sante > 0) {
               console.log(cible.nom + " a encore " + cible.sante + " points de vie");
           } else {
               console.log(cible.nom + " est mort !");
           }
        }
        else {
            console.log (this.nom + " ne peut pas attaquer : il est mort...");
        }
    }
};

// Creation d'un joueur sur la base d'un personnage
const Joueur = Object.create(Personnage);

Joueur.initJoueur = function (nom, sante, force){
    this.initPerso(nom,sante,force); //On initialise le joueur avec la fonction d'init du perso
    this.xp = 0; // Experience à 0
};

//Methode pour décrire le personnage
Joueur.decrire = function () {
    const description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};

//Methode pour combattre un adversaire
Joueur.combattre = function(adversaire){
    this.attaquer(adversaire);
    console.log(adversaire.sante)
    if (adversaire.sante <= 0){
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur + " point d'expérience");
        this.xp += adversaire.valeur;
    }
};

//Création d'un adversaire sur la base d'un personnage
const Adversaire = Object.create(Personnage);

Adversaire.initAdversaire = function (nom,sante,force,race,valeur){
    this.initPerso(nom,sante,force);
    this.race = race;
    this.valeur = valeur;
}

//Création du joueur 1
const joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora",150,25);

//Creation du joueur 2
const joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius",130,35);

//Description des joueurs
console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

//Arrivée d'un monstre
const monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog",40,20,"orc",10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race+ " nommé " + monstre.nom);

//Combat
monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire())
console.log(joueur2.decrire())