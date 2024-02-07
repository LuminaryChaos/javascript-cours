console.log(Number("3.14"))
console.log(Number("12 34"))    
console.log(Number(""))
console.log(Number(" "))



/* Number to String */

let r = "39"
v = Number(r)
console.log(v)
console.log(typeof(v))


let z = "2"
cz = + z
console.log(cz)
console.log(typeof(cz))



/* String to Number */


let s = 2
cs = String(s)
console.log(cs)
console.log(typeof(cs))


let x = 20
xs = x.toString()
console.log(typeof(xs))


console.log(typeof(String( 90 + 10 )))



/* boolean 0 ou 1 */

console.log(Boolean(0))
console.log(Boolean(1))

let d = new Date()

console.log( d .getDate().toString() )
console.log( String( d .getDay() )             )
console.log( String( d .toLocaleDateString() ) )
console.log( d .getFullYear()        )
console.log( d .getHours()           )
console.log( d .getMilliseconds()    )
console.log( d .getYear()            )
console.log( d .getMinutes()         )
console.log( d .getMonth()           )
console.log( d .getSeconds()         )
console.log( d .getTime()            )
console.log( d .getTimezoneOffset()  )
console.log( d .getDate()            )








// exercice du moyenne des notes :

let mention;
let moyenne = prompt("Entrer la moyenne");

moyenne = parseFloat(moyenne)

if (moyenne >= 18 && moyenne <= 20) {
    mention = "Excellent";
} else if (moyenne > 16 && moyenne <= 18) {
    mention = "Très bien";
} else if (moyenne > 14 && moyenne <= 16) {
    mention = "Bien";
} else if (moyenne > 12 && moyenne <= 14) {
    mention = "Normal";
} else if (moyenne > 10 && moyenne <= 12) {
    mention = "Faible";
} else if (moyenne <= 10) {
    mention = "Trop faible";
} else {
    mention = "Moyenne invalid";
}
console.log(mention);

