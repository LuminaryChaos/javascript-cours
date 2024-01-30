console.log(typeof(2))
console.log(typeof("for string"))
console.log(typeof(undefined))
console.log(typeof(false))


let a;
let b;

    a=5;
    b=a;
    b=6;

console.log(a)
console.log(b)



// le types d'objets de base

let liste =[1,2,3]

let copielist = liste
copielist.push(5)

console.log(liste)
console.log(copielist)

let stagiaire ={
    id : 1,
    prenom:"Othmane"
}

let cstg = stagiaire
    cstg.age=14


// copie

let liste2 =[].concat(liste)

// spread operator {operateur de programation}

let liste3 = [...liste]

let stagiaire3  = {...stagiaire}
stagiaire.branche="DD"

Object.assign(stagiaire,stagiaire3)
stagiaire.annee="2024"

liste2.push(9)

console.log(liste)
console.log(liste2)
console.log(stagiaire)
console.log(stagiaire3)
console.log(liste3)


console.log(typeof(liste))





