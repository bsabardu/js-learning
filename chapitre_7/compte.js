const compte = {
    titulaire : "Alex",
    solde : 0,
    crediter : function(montant){
        this.solde = this.solde + montant;
        return this.solde;
    },
    debiter : function(montant){
        this.solde = this.solde - montant;
        return this.solde;
    },
    decrire : function(){
        console.log("Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros");
    },
}
compte.decrire();
const credit = prompt("Entrez un montant à créditer");
compte.crediter(credit);
const debit = prompt("Entrez un montant à débiter");
compte.debiter(debit);
compte.decrire();