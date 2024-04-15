document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nom = document.getElementById('nom').value;
        const prenom = document.getElementById('prenom').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!nom || !prenom || !email || !password || !confirmPassword) {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        // Enregistrement des données dans localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        localStorage.setItem('userName', nom);
        localStorage.setItem('userSurname', prenom);

        // Redirection vers la page de succès
        window.location.href = '../html/success.html'; // Assurez-vous que cette page existe et qu'elle est correctement liée
    });
});