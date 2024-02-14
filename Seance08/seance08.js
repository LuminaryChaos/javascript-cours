



// // shows only the first elemnet
// console.log(document.querySelector("div"));

// // shows all the elemnet : o boucle ila bghiti twsl lga3 les elements
// console.log(document.querySelectorAll("div"));





for (let i = 0; i <= 2; i++){
    vDiv[i].style.backgroundColor="red";
    vDiv[i].style.color="white";
};

// console.log(vDiv[1]);
// console.log(vDiv.length);


// Margin 

document.querySelector(".divS").style.marginTop= "100px";
document.querySelector(".divS").style.marginLeft= "100px";
document.querySelector(".divS").style.marginRight= "100px";
document.querySelector(".divS").style.marginBottom= "100px";


// putting  in variable
let titre = document.getElementById("DD106")

titre.textContent="Infrastructure"
titre.style.color="lime"
titre.style.backgroundColor="aqua"