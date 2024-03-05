
//------------------------exercice-----------------------------//

const item = {
    id: 1,
    article: 'skate-board',
    prix: 10,
    Qte: 5,

    calculateTTL : function() {
        const HT = this.prix * this.Qte;
        const TVA = HT * 0.2;
        const TTC = HT + TVA;
        return TTC;
    }
};
  
 
console.log(item.calculateTTL());


//----------------------------------------corrigé avec autre methode------------------------------------------//


        class Achats{
            constructor(v_Id,v_Article,v_Prix,v_Qte){
                this.Id=v_Id;
                this.Article=v_Article;
                this.Prix=v_Prix;
                this.Qte=v_Qte;
            }
            Calculer_TTC(){
                const vTVA= 20/100;
                let total =this.Prix * this.Qte;
                let totalTTC = total + total * vTVA
                return totalTTC
            } 
        }
//------------------------------------------les methodes des classes-------------------------------------------//



    // let branche="DD-106"
    // let Prenom = "the goat Othmane"
    // let nom = "test"


    // console.Log(branche.length);
    // console.Log(branche.charAt(6));
    // console.Log(branche.substring(2,5));
    // console.Log(branche.toLowerCase());
    // console.Log(branche.toUpperCase());
    // console.Log(phrase.split(" "));
    // console.Log(Array.from);
    // console.Log();
    // console.Log();
    


    // ----------------------------------------date---------------------------------------------//

    let vDate = new Date("2021-3-20")
    console.log(vDate)

    vDate.setMonth(4)
