// la selection des inputs et du formulaire

const form = document.getElementById("signup-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");


// la selection des spans

const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");


// les buttons (ajouter et annuler): 

  document.querySelector(".btn-ajouter").addEventListener("click", function(e) {
    e.preventDefault();
    let user_name_value = document.forms["formulaire"]["username"].value;
    let email_value = document.forms["formulaire"]["email"].value;
    let password_value = document.forms["formulaire"]["password"].value;
    let confirm_password_value = document.forms["formulaire"]["confirm-password"].value;

    if (user_name_value === "") {
        console.log("Please enter a value.");
        usernameError.style.display = "block";
        usernameInput.style.borderColor = "red";
        
    } else {
        console.log("Entered value: " + user_name_value);

        usernameError.style.display = "none";
        usernameInput.style.borderColor = "";
    }
    if (email_value === "") {
        console.log("Please enter a value.");
        emailError.style.display = "block";
        emailInput.style.borderColor = "red";
        
    } else {
        console.log("Entered value: " + email_value);
        emailError.style.display = "none";
        emailInput.style.borderColor = "";
    }



    if (password_value === "") {
        console.log("Please enter a value.");
        passwordError.style.display = "block";
        passwordInput.style.borderColor = "red";
        
    } else {
        console.log("Entered value: " + password_value);
        passwordError.style.display = "none";
        passwordInput.style.borderColor = "";
    }
    if (confirm_password_value === "") {
        console.log("Please enter a value.");
        confirmPasswordError.style.display = "block";
        confirmPasswordInput.style.borderColor = "red";
        
    } else {
        console.log("Entered value: " + confirm_password_value);
        confirmPasswordError.style.display = "none";
        confirmPasswordInput.style.borderColor = "";
    }
    });

  document.querySelector(".btn-annuler").addEventListener("click", function() {
    document.querySelector(".Form1").reset();
  });
    

  