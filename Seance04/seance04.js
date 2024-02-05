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




/* S tring to Number */


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

const today = new Date();
const fullDayName = today.toLocaleDateString('en-US', { weekday: 'long' });
console.log(fullDayName); // Output: Friday


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


let day
switch (new Date().getDay()) {
    case 0:
    day = "Sunday"; break;
    case 1:
    day = "Monday"; break;
    case 2:
    day = "Tuesday"; break;
    case 3:
    day = "Wednesday"; break;
    case 4:
    day = "Thursday"; break;
    case 5:
    day = "Friday"; break;
    case 6: 
    day = "Saturday"
    }

console.log(day)


let mention;


let moyenne = 40/2;

switch (moyenne) {
     case moyenne >= 20 && moyenne <= 18 :
        mention = "Exellent"; break;
    case  moyenne > 16 && moyenne <= 18  :
        mention = "Trés-bien"; break;
    case moyenne > 14 && moyenne <= 16   :
        mention = "bien"; break;
    case  moyenne > 12 && moyenne <= 14:
        mention = "normal"; break;
    case moyenne > 10 && moyenne <= 12:
        mention = "faible"; break;
        case moyenne < 10:
            mention = "trop-faible"; break;
    default:
        mention = "Invalid average";
    }
console.log(mention)