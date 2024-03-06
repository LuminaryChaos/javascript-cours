
//------------------------exercice-----------------------------//

// const item = {
//     id: 1,
//     article: 'skate-board',
//     prix: 10,
//     Qte: 5,

//     calculateTTL : function() {
//         const HT = this.prix * this.Qte;
//         const TVA = HT * 0.2;
//         const TTC = HT + TVA;
//         return TTC;
//     }
// };
  
 
// console.log(item.calculateTTL());


//----------------------------------------corrigé avec autre methode------------------------------------------//



        // class Achats{
        //     constructor(v_Id,v_Article,v_Prix,v_Qte){
        //         this.Id=v_Id;
        //         this.Article=v_Article;
        //         this.Prix=v_Prix;
        //         this.Qte=v_Qte;
        //     }
        //     Calculer_TTC(){
        //         const vTVA= 20/100;
        //         let total =this.Prix * this.Qte;
        //         let totalTTC = total + total * vTVA
        //         return totalTTC
        //     } 
        // }


//------------------------------------------les methodes des classes-----------------------------------------//


    // let branche="DD-106"
    // let Prenom = "the goat Othmane"
    // let nom = "test"


    // console.Log(branche.length);
    // console.Log(branche.charAt(6));
    // console.Log(branche.substring(2,5));
    // console.Log(branche.toLowerCase());
    // console.Log(branche.toUpperCase());  il en a aussi startswidth and endwidth pour les Strings,.
    // console.Log(phrase.split(" "));
    // console.Log(Array.from);
    // console.Log();
    // console.Log();
    


    // ----------------------------------------date----------------------------------------------//

    // let vDate = new Date("2021-3-20")
    // console("😂")
    // console.log(vDate)

    // vDate.setMonth(4)

   // ----------------------------------------Math-----------------------------------------------//

    let nombre = 14.1

    console.log(Math.ceil(nombre))

    // the diff between both of them show up when numbers are negatifs
    console.log(Math.trunc(nombre))
    console.log(Math.floor(nombre))

    console.log("Random number:")
    console.log(Math.floor(Math.random()*20) + 1)

    console.log(Math.max(1,87,34,23))
    console.log(Math.min(1,87,34,23))


    console.log(Math.round(20.4));
    console.log(Math.round(20.9));

    
    console.log(Math.sqrt(49));
    console.log(Math.sqrt(25));



    //-----------------------------------------EX app--------------------------------------------------------//

    let infos = [
        { id: 1, nom: "othmane", note: 18 },
        { id: 2, nom: "omar", note: 12 },
        { id: 3, nom: "adam", note: 10 }
      ];
      
    let L = infos.map(function(itemValue) {
        return itemValue.note;
    });
      
    let maxNote = Math.max(...L);
      
    let infos_donnes = infos.filter(function(itemValue) {
        return itemValue.note === maxNote
        
    });

    console.log(L)
    console.log(infos_donnes)

    
































    //------------------------------button----------------------------//



    document.querySelector(".btn").addEventListener("click",function(){

        // open("https://google.com")

        if(confirm ("Hello do u really want it, if that so click 'OK' if not click 'Annuler'.")){
            console.log("Done")
        }
    })


//---------------------- exemple d'alert --------------------------------//

        console.log("1")
        console.log("2")
        alert("do u really wanna continue")
        console.log("3")
        console.log("4")

//---------------------- exemple set time out --------------------------------//

        console.log("1")

        setTimeout (function(){
            console.log("2");
        },3000)

        // 3000 in ms

        console.log("3")
        console.log("4")


//---------------------- exemple clear time out --------------------------------//

        console.log("1")

        setTimeout (function(){
            console.log("2");
        },3000)

        console.log("3")
        console.log("4")



        // search and replace
        // Promess

        //  fetch elle utilise la methode promess



let completed = true;
let getData = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (completed) {
            resolve("Donnée récupérée");
        } else {
            reject("Je n'ai pas pu récupérer la donnée");
        }
    }, 2000);
});

getData.then(function(result) {
    console.log(result); 
}).catch(function(error) {
    console.error(error);
});




