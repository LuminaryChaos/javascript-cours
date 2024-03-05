const trainees = [];

document.addEventListener("DOMContentLoaded", function () {
    const notesForm = document.getElementById("notes-form");
    const searchInput = document.getElementById("recherche");
    const searchBtn = document.getElementById("searchBtn");
    const notesTableBody = document.getElementById("tableBody");

    

    notesForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const filiere = document.getElementById("filiere").value;
        const module = document.getElementById("modules").value;
        const note = document.getElementById("notes").value;

        const trainee = {
            nom,
            prenom,
            filiere,
            module,
            note
        };

        trainees.push(trainee);
        console.log("Trainee added:", trainee);
    });





    searchBtn.addEventListener("click", function () {
        const searchN = searchInput.value.toLowerCase();

        const filteredTrainees = trainees.filter(trainee => {
            const fullName = trainee.nom.toLowerCase() + ' ' + trainee.prenom.toLowerCase();
            return fullName.includes(searchN);
        });

        displaySearchResults(filteredTrainees);
    });

    function displaySearchResults(trainees) {

        notesTableBody.innerHTML = "";


        trainees.forEach(trainee => {
            const row = document.createElement("tr");
            const moduleCell = document.createElement("td");
            const noteCell = document.createElement("td");

            moduleCell.textContent = trainee.module;
            noteCell.textContent = trainee.note;

            row.appendChild(moduleCell);
            row.appendChild(noteCell);
            notesTableBody.appendChild(row);
        });
    }
});






