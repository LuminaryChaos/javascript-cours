// EX1

A = document.querySelector(".Input1").value = +44
B = document.querySelector(".Input2").value = +45
let S = A+B
document.querySelector(".Input3").value= A+B
console.log("la somme est :",S)


// EX2


if (A > 10 && B > 30 && S > 100) {
    document.body.style.backgroundColor = "red";
}else{
    document.body.style.backgroundColor = "aqua";
    document.querySelector(".Input1").style.backgroundColor = "aqua";
    document.querySelector(".Input2").style.backgroundColor = "red";
    document.querySelector(".Input3").style.backgroundColor = "lime";
};
