const stagiaire = {
    "id": 1,
    "nom": "Othmane",
    "age": 20,
    "branche": "DD106"
};

let stagiaires = [{
    "id": 2,
    "nom": "Adam",
    "age": 18,
    "branche": "DD106"
},
{
    "id": 3,
    "nom": "Youssef",
    "age": 19,
    "branche": "DD104"
}
];

const stagiairesJSON = JSON.stringify(stagiaires);
console.log(stagiairesJSON);

const parsedStagiaires = JSON.parse(stagiairesJSON);
console.log(parsedStagiaires);

console.log(parsedStagiaires[1].branche);

console.log(parsedStagiaires);

function loadData() {
    let etudiants;
    let content = "";
    const request = new XMLHttpRequest(); 
    request.open("GET", "listeStagiaires.json", true);
    request.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText); 
            etudiants = data.stagiaires;
            console.log(etudiants);
            for (let i = 0; i < etudiants.length; i++) {
                content += '<li>' + etudiants[i].nom + '</li>';
            }
            console.log(content);
            document.getElementById("liste-stagiaires").innerHTML = content;
        }
    };
    request.send();
}

document.getElementById("load-data").addEventListener("click", loadData);








// JSON.parse();  converting JSON to JS
// JSON.stringify() converting  JS to JSON
    


// JSON ne contient pas de fonction.
