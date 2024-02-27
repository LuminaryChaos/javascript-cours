// let msg = document.querySelector(".first_input")


// msg.addEventListener("keypress", function (e) {
//     e.preventDefault()
//     console.log(e.keyCode)
    
//     if (e.keyCode === 13){

//         document.querySelector(".btn").classList.add("change_border_color");
//         document.querySelector(".btn").classList.remove("error");

//     }else if (e.keyCode === 32){

//         document.querySelector(".btn").classList.add("error");
//         document.querySelector(".btn").classList.remove("change_border_color");

//     }
//     console.log("you did click on a button")
// });
    


document.querySelector(".btn-ajouter").addEventListener("click", function(e) {
    e.preventDefault();
    let nom = document.forms["formulaire"]["first_one"].value;


    if (nom == "") {
        console.log("Please enter a value.");
        
    } else {
        console.log("Entered value: " + nom);
    }
});

document.querySelector(".btn-annuler").addEventListener("click", function() {
    document.querySelector(".Form1").reset();
});
    



// name_of_formulaire.submit()
// name_of_formulaire.reset()