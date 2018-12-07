let mousquetaires = ["Athos","Portos","Aramis"];

console.log("Voici les 3 mousquetaires");

for (i=0;i<mousquetaires.length;i++){
    console.log(mousquetaires[i]);
}

console.log("A présent ils sont quatre !");
mousquetaires.push("Artagnan");

mousquetaires.forEach(function(mousquetaire){
    console.log(mousquetaire);
});