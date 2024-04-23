$(document).ready(function(){

    var dataList = [];


    function sauvegarderDonnees() {
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var groupe = $("#groupe").val();
        var note = $("#note").val();
        var code = $("#code").val();


        if (!validerFormat(code)) {
            $("#code").addClass("error");
            $("#error-message").text("Format incorrect. Utilisez le format ' DD - 3 numbers - 2 numbers. '");
            return;
        }


        $("#code").removeClass("error");
        $("#error-message").text("");


        var newData = {
            code: code,
            nom: nom,
            prenom: prenom,
            groupe: groupe,
            note: note
        };

        dataList.push(newData);
        
        afficherListe();
    }

    function validerFormat(champ) {
        var regex = /^\d{2}-\d{3}\s\d{2}$/;
        return regex.test(champ);
    }


    function afficherListe() {
        $("#data-list").empty();
        for (var i = 0; i < dataList.length; i++) {
            $("#data-list").append("<li>" + JSON.stringify(dataList[i]) + "</li>");
        }
    }

    $("#btn-sauvegarde").click(function(){
        sauvegarderDonnees();

        // Fonction pour valider le format
function validerFormat(champ) {
    var regex = /^\d{2}-((?=\d{3})(?!(\d)\1{2}))\d{3}\s((?=\d{2})(?!(\d)\3))\d{2}$/;
    return regex.test(champ);
}

    });
});
