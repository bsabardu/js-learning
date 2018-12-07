const r = Number(prompt("Entrez le rayon d'un cercle :"));

const cercle = {
    rayon : r,
    perimetre : function(){
        const perimetre = r * Math.PI * 2;
        return perimetre;
    },
    aire : function(){
        const aire = (r*r) * Math.PI;
        return aire;
    }, 
}

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());