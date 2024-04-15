document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            window.location.href = '../html/login_success.html'; // Ensure this path is correct
        } else {
            alert('Les informations sont invalides. Veuillez vérifier votre email et votre mot de passe ou vous inscrire');
        }
    });
});