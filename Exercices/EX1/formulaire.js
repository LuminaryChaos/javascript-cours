//form global, conteneur de tous les elements.

var formContainer = document.getElementById('formContainer');

    formContainer.style.boxShadow="3px 3px 3px rgba(0, 0, 0, 0.2)"
    formContainer.style.width="400px"
    formContainer.style.height="350px"
    formContainer.style.marginLeft="420px"
    formContainer.style.marginTop="40px"
    formContainer.style.paddingLeft="50px"


var title = document.querySelector(".title");

    title.style.color="mediumpurple"
    title.style.marginLeft="530px"



var form = document.createElement('form');
    form.id = 'myForm';


var Signin = document.createElement('p');
    Signin.style.fontSize = "20px"

    Signin.innerHTML = "Sign in to your account"
    formContainer.append(Signin)


// Email .

    var emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'email');
        emailLabel.textContent = 'Email:';

        emailLabel.style.fontSize = "13px"

    var emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.id = 'email';
        emailInput.name = 'email';

        emailInput.style.height = "30px"
        emailInput.style.marginTop = "15px"
        emailInput.style.width = "300px"


// Password .

    var passwordLabel = document.createElement('label');
        passwordLabel.setAttribute('for', 'password');
        passwordLabel.textContent = 'Password:';

    passwordLabel.style.fontSize = "13px"

    var passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.id = 'password';
        passwordInput.name = 'password';

    
        passwordInput.style.height = "30px"
        passwordInput.style.marginTop = "15px"
        passwordInput.style.width = "300px"

// Radio

    var radioInput = document.createElement('input');
        radioInput.type = 'checkbox';


    var radiolabel = document.createElement('label');
        radiolabel.innerHTML = "Stay signed in for a week"

        radiolabel.style.marginLeft="10px"


// Submit.

    var submitInput = document.createElement('input');
        submitInput.type = 'submit';
        submitInput.value = 'Submit';


        submitInput.style.color="aqua"
        submitInput.style.backgroundColor="mediumpurple"
        submitInput.style.height = "30px"
        submitInput.style.width = "70px"
        submitInput.style.marginTop = "50px"
    
    


// Afficher:

    var afficherbtn = document.createElement( 'button')

        afficherbtn.style.color="aqua"
        afficherbtn.style.backgroundColor="mediumpurple"
        afficherbtn.style.height = "30px"
        afficherbtn.style.width = "70px"
        afficherbtn.style.marginTop = "-70px"
        afficherbtn.style.marginLeft = "20px"

        afficherbtn.innerHTML = "Afficher"



    form.appendChild(emailLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
    form.appendChild(passwordLabel);
    form.appendChild(document.createElement('br'));
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));
    form.appendChild(radioInput)
    form.append(radiolabel)
    form.appendChild(document.createElement('br'));
    form.appendChild(submitInput)
    form.appendChild(afficherbtn)


    formContainer.appendChild(form);

    function handleSubmit(event) {
      event.preventDefault(); 

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      console.log('Email:', email);
      console.log('Password:', password);

      document.getElementById('myForm').reset();
    }

    document.getElementById('myForm').addEventListener('submit', handleSubmit);