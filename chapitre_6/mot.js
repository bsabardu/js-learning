
//Demande d'un mot à l'utilisteur
const userWord = prompt("Choisissez un mot");

//Comptable du nombre de caractères
const userWordLength = userWord.length;

//Passage en minuscule 
const userWordMinu = userWord.toLowerCase();

//Passage en majuscule
const userWordMaj = userWord.toUpperCase();


//Affichage en console des différentes propriété 
console.log("Le mot séléctionné est : "+userWord); 
console.log(`${userWord} contient ${userWordLength} caractère(s)`);
console.log(`${userWord} s'écrit ${userWordMaj} en majuscule`);
console.log(`${userWord} s'écrit ${userWordMinu} en minuscule`);
console.log(`La première lettre est ${userWord[0]}`);

//Détail des caractères
console.log("Vous le détail de tous les caractères");
for(i=0;i<userWordLength;i++){
    console.log(userWord[i]);
}

//Fonction pour déterminer si une lettre est une voyelle ou non
const isVoyelle = function(letter){
    letterMinu = letter.toLowerCase();
        if (letterMinu === "a" || letterMinu === "e" || letterMinu === "i" || letterMinu === "o" || letterMinu === "u" || letterMinu === "y"){
            return "Voyelle";
        } else {
            return "Consonne"
        }        
}

//Fonction pour afficher le nombre de voyelles et de consonnes d'un mot
const compterNbVoyelles = function(mot){
    let voyelles = 0
    let consonnes = 0
    for(i=0;i<userWordLength;i++){
        if(isVoyelle(userWord[i])=== "Voyelle"){
            voyelles++;
        } else {
            consonnes++;
        }
        console.log(isVoyelle(userWord[i]));
    }
    console.log(`Le mot ${userWord} comprend ${voyelles} voyelles et ${consonnes} consonne(s)`)
}

//Appel de la fonction en prenant le mot entré par l'utilisateur en paramètre
compterNbVoyelles(userWord);


//Fonction inverser
function inverser(mot){
    let inverse = ""
    for(i=0;i<userWordLength;i++){
        inverse = inverse + (userWord[userWordLength-1-i]);
    }
    return inverse;
}

//Affiche l'inverse du mot entré par l'utilisateur 
console.log("Il s'écrit à l'envers : " + inverser(userWord));

//Fonction Palindrome
if (userWordMinu === inverser(userWord).toLowerCase()){
    console.log ("C'est un palindrome");
} else {
    console.log ("Ce n'est pas un palindrome");
}

//Fonction permettant de convertir une lettre en LeetSpeak
function trouverLettreLeet(letter){
    let letterMin = letter.toLowerCase();
    let letterLeet = letterMin;
    switch(letterMin){
        case "a":
        letterLeet = "4";
        break;
        case "b":
        letterLeet = "8";
        break;
        case "e":
        letterLeet = "3";
        break;
        case "l":
        letterLeet = "1";
        break;
        case "o":
        letterLeet = "0";
        break;
        case "s":
        letterLeet = "5";
        break;
    }
    console.log(letterLeet);
}
trouverLettreLeet("a");

//Changer un mot
function convertirEnLeetSpeak(mot){
    for(i=0;i<mot.length;i++){
        trouverLettreLeet(mot[i]);
    }
    return convertirEnLeetSpeak(mot);
}

convertirEnLeetSpeak(userWord)