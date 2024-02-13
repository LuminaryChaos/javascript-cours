
// EX1


A = document.querySelector(".Input1").value = +44
B = document.querySelector(".Input2").value = +45
let S = A+B
document.querySelector(".Input3").value= S
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

// EX3

// document.querySelector(".btn").addEventListener("click",calculer);  // calculer : is the name of the function.

document.querySelector(".btn").addEventListener("click", () => {
    let A = document.querySelector(".Input1").value = +13;
    let B = document.querySelector(".Input2").value = +17;
    let S = A + B;

    document.querySelector(".Input3").value = S;
    console.log("la somme est :", S);

    if (A > 10 && B > 30 && S > 100) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "aqua";
        document.querySelector(".Input1").style.backgroundColor = "aqua";
        document.querySelector(".Input2").style.backgroundColor = "red";
        document.querySelector(".Input3").style.backgroundColor = "lime";
        console.log("DONE");
    }
});


// button 2


function Initialization() {
    document.querySelector(".Input1").value = " ";
    document.querySelector(".Input2").value = " ";
    document.querySelector(".Input3").value = " ";
}

document.querySelector(".btn2").addEventListener("click", Initialization);


