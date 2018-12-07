let valeurs = [11,3,7,2,9,15];

let max = valeurs[0];
for (i=0;i<valeurs.length;i++){
    if (max < valeurs[i]){
        max = valeurs[i];
        i++;
    };
};

console.log("La valeur max est : " + max);

