document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm'); // Sélection du formulaire par son ID
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        const prenom = document.getElementById('Prenom').value.trim();
        const domicile = document.getElementById('Domicile').value.trim();
        const pays = document.getElementById('Pays').value.trim();
        const nomDeFamille = document.getElementById('Nom_de_famille').value.trim();
        const codePostal = document.getElementById('Code_postal').value.trim();
        const posteSouhaite = document.getElementById('Poste_Souhaite').value.trim();
        const adresseCouriel = document.getElementById('Adresse_couriel').value.trim();
        const ville = document.getElementById('Ville').value.trim();
        const numeroTelephone = document.getElementById('Numero_de_telephone').value.trim();
        const province = document.getElementById('Province').value.trim();

        const prenomRegex = /^[a-zA-Z\s]+$/;
        const codePostalRegex = /^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telephoneRegex = /^\d{10}$/;
        const paysRegex = /^[a-zA-Z\s]+$/;
        const villeRegex = /^[a-zA-Z\s]+$/;
        const provinceRegex = /^[a-zA-Z\s]+$/; // ou une liste de provinces valides

        if (!prenomRegex.test(prenom)) {
            alert("Veuillez entrer un prénom valide.");
            return;
        }

        if (domicile === "") {
            alert("Veuillez entrer votre domicile.");
            return;
        }

        if (!paysRegex.test(pays)) {
            alert("Veuillez entrer un pays valide.");
            return;
        }

        if (nomDeFamille === "") {
            alert("Veuillez entrer un nom de famille valide.");
            return;
        }

        if (!codePostalRegex.test(codePostal)) {
            alert("Veuillez entrer un code postal valide.");
            return;
        }

        if (posteSouhaite === "") {
            alert("Veuillez entrer un poste souhaité valide.");
            return;
        }

        if (!emailRegex.test(adresseCouriel)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }

        if (!villeRegex.test(ville)) {
            alert("Veuillez entrer une ville valide.");
            return;
        }

        if (!telephoneRegex.test(numeroTelephone)) {
            alert("Veuillez entrer un numéro de téléphone valide.");
            return;
        }

        if (!provinceRegex.test(province)) {
            alert("Veuillez entrer une province valide.");
            return;
        }

        // Afficher un message de succès après soumission du formulaire
        alert("Le formulaire a été soumis avec succès!");
    });
});
