// les fonctions

// function expressions

let somme = function (a,b){
    return a + b
}

    let sm = somme(5,9)
    console.log(sm)

// les fonctions flechées (arrow function)

// both are the same

    const greet = () => {
        return console.log("the honored one")
    };
    greet();



    let nomcomplet = (nom,prenom) => {
        let fullname = nom + " " + prenom;
        return fullname;
    }
    console.log(nomcomplet("NAJMI","OTHMANE"));



//les expressions lambdas
// Map (il retourne un une nouveau tableau)


let jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];


jours.map(function(item){
    return console.log(item)
});


jours.map(item => {
    if( item === "mardi"){
        item = item + "__the prefered day__ "
    }
    return console.log(item)
});
console.log(jours)



const stagiaires = [
    { nom: "sidqui", prenom: "zakaria", age: 22 },
    { nom: "merzoug", prenom: "khalid", age: 24 },
    { nom: "Amrani", prenom: "Adam", age: 17 },
    { nom: "ouafik", prenom: "mohamed", age: 18 }
];

    let cctdNames
    cctdNames = stagiaires.map((stagiaire) => {
        const all = stagiaire["nom"] + " " + stagiaire["prenom"];
        return all;
    });

    console.log(cctdNames);





    
    let stagiaires2 = [
        { nom: "sidqui", prenom: "zakaria", age: 22 },
        { nom: "merzoug", prenom: "khalid", age: 24 },
        { nom: "Amrani", prenom: "Adam", age: 17 },
        { nom: "Othmane", prenom: "Najmi", age: 27 }
    ];
    
    let nomAgeColumns = stagiaires2.map((stagiaire) => {

            return { nom: stagiaire.nom, age: stagiaire.age };

    });
    
    console.log(nomAgeColumns);
    


  
    let etudiant = [
        { nom: "NAJMI", prenom: "OTHMANE", age: 9, branche: "DD" },
    ];


// EX d'application de + ou - de 20 ans:

    let nameAge = etudiant.map(({ nom, prenom, age, branche }) => {
    let remarque;

    if (age > 20) {
        remarque = "Plus de 20 ans";
      } else if (age < 20) {
        remarque = "Moins de 20 ans";
      }
    return { nom, prenom, age, branche, remarque };
    });

console.log(nameAge);
