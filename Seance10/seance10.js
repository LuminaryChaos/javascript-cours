
    const stagiaireslist = [];
        document.querySelector(".ajouter").addEventListener("click", (e) => {
            e.preventDefault();
            let stagiaire = { nom: "", prenom: "", age: null }

            let nom = document.getElementById('nom').value;
            let prenom = document.getElementById('prenom').value;
            let age = Number(document.getElementById('age').value);

            stagiaire.nom = nom;
            stagiaire.prenom = prenom;
            stagiaire.age = age;

            stagiaireslist.push(stagiaire);
        })

        document.querySelector(".afficher").addEventListener("click", (e) => {
            e.preventDefault();


                let table = document.createElement('table');
                    table.style.border = '1px solid black';

                let headerRow = table.insertRow();
                let headers = ['Nom', 'Prenom', 'Age'];

                    headers.forEach(headerText => {
                        let header = document.createElement('th');
                        let textNode = document.createTextNode(headerText);
                        header.appendChild(textNode);
                        headerRow.appendChild(header);
                    });


                    stagiaireslist.forEach(stagiaire => {
                        let row = table.insertRow();
                        let nomCell = row.insertCell();
                        let prenomCell = row.insertCell();
                        let ageCell = row.insertCell();

                        nomCell.appendChild(document.createTextNode(stagiaire.nom));
                        prenomCell.appendChild(document.createTextNode(stagiaire.prenom));
                        ageCell.appendChild(document.createTextNode(stagiaire.age));


                        nomCell.style.border = '1px solid black';
                        prenomCell.style.border = '1px solid black';
                        ageCell.style.border = '1px solid black';
                    });


                    let displayDiv = document.createElement("div");
                    displayDiv.classList.add("table-container");
                    displayDiv.appendChild(table);
                    document.body.appendChild(displayDiv);

            });

            document.querySelector(".dlt-table").addEventListener("click", (e) => {
                e.preventDefault();
        
                const tableContainers = document.querySelectorAll(".table-container");
                tableContainers.forEach(elem => {
                    elem.remove();
                });
            });


            let days = [1,2,3,4,5,6,7]

            days.forEach(elem => {
                console.log(elem)
            })
            
