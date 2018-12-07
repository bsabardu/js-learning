const word = prompt("Saissisez une liste de mot, quand vous avez terminé, saississez stop ");

let words = {
list : [],
display : function(){
    console.log(words.list);
},
}

addWords = function(word){
    while (word !== "stop"){
        words.push(word);
        prompt("Saissisez un mot")
    }
    words.display();
};



