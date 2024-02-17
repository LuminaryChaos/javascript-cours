



// shows only the first elemnet
console.log(document.querySelector("div"));

 // shows all the elemnet : o boucle ila bghiti twsl lga3 les elements
console.log(document.querySelectorAll("div"));



let divS = document.querySelector(".divS"); // querySelectorAll TO WORK

for (let i = 0; i < divS.length; i++){
    divS[i].style.backgroundColor="red";
    divS[i].style.color="white";
};


// console.log(vDiv[1]);
console.log(divS.length);


// Margin 

let divX = document.querySelector(".divS");

if (divX) {
    divS.style.marginTop = "100px";
    divS.style.marginLeft = "100px";
    divS.style.marginRight = "100px";
    divS.style.marginBottom = "100px";
}


// putting  in variable

let titres = [
    document.getElementById("DD106"),
    document.getElementById("DD105"),
    document.getElementById("DD104")
  ];
  
  for (let titre of titres) {
    titre.textContent = "Infrastructure";
    titre.style.color = "white";
    titre.style.backgroundColor = "aqua";
  }
  