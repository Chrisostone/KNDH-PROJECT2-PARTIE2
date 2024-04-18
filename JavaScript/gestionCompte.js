document.addEventListener('DOMContentLoaded', function() {
    // Rendre les menus réactifs à la taille de l'écran de l'utilisateur
    const menuButton = document.getElementById('contenant1');
    const nav = document.querySelector('header nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    } else {
        console.error('Menu non trouvé.');
    }

    // Validation des formulaires
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const inputs = form.querySelectorAll('input');
            let formIsValid = true;

            inputs.forEach(input => {
                if (input.name === 'nom') {
                    const regex = /^[a-zA-Z\s]*$/;
                    if (!regex.test(input.value.trim())) {
                        formIsValid = false;
                        input.classList.add('error');
                        input.nextElementSibling.innerText = 'Le nom est invalide.';
                    } else {
                        input.classList.remove('error');
                        input.nextElementSibling.innerText = '';
                    }
                }

                if (input.name === 'email') {
                    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!regex.test(input.value.trim())) {
                        formIsValid = false;
                        input.classList.add('error');
                        input.nextElementSibling.innerText = 'L\'email est invalide.';
                    } else {
                        input.classList.remove('error');
                        input.nextElementSibling.innerText = '';
                    }
                }
            });

            const messageContainer = form.querySelector('.message');
            if (formIsValid) {
                messageContainer.innerText = 'Formulaire soumis avec succès !';
                messageContainer.classList.remove('error-message');
                messageContainer.classList.add('success-message');
            } else {
                messageContainer.innerText = 'Veuillez remplir correctement tous les champs.';
                messageContainer.classList.remove('success-message');
                messageContainer.classList.add('error-message');
            }
        });
    });

    // Ajouter des interactions avec l'utilisateur
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            section.style.backgroundColor = '';
        });

        section.addEventListener('mouseleave', function() {
            section.style.backgroundColor = ''; // Réinitialiser la couleur de fond au survol de la souris
        });
    });

    // Gestion des préférences de notification
    const notificationForm = document.getElementById('notifications');

    if (notificationForm) {
        notificationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const checkbox = notificationForm.querySelector('input[name="emailNotif"]');
            const messageContainer = notificationForm.querySelector('.message');

            if (checkbox.checked) {
                messageContainer.innerText = 'Notifications par email activées.';
                messageContainer.classList.remove('error-message');
                messageContainer.classList.add('success-message');
            } else {
                messageContainer.innerText = 'Veuillez cocher la case pour activer les notifications par email.';
                messageContainer.classList.remove('success-message');
                messageContainer.classList.add('error-message');
            }
        });
    }

    // Changer le mot de passe
    const passwordForm = document.getElementById('password');

    if (passwordForm) {
        passwordForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const oldPasswordInput = passwordForm.querySelector('input[name="oldPassword"]');
            const newPasswordInput = passwordForm.querySelector('input[name="newPassword"]');
            const messageContainer = passwordForm.querySelector('.message');

            // Vérification si les champs sont vides
            if (oldPasswordInput.value.trim() === '' || newPasswordInput.value.trim() === '') {
                messageContainer.innerText = 'Veuillez remplir tous les champs.';
                messageContainer.classList.remove('success-message');
                messageContainer.classList.add('error-message');
            } else {
                // Ajouter ici la logique de changement de mot de passe
                messageContainer.innerText = 'Mot de passe changé avec succès !';
                messageContainer.classList.remove('error-message');
                messageContainer.classList.add('success-message');
            }
        });
    }

    // Rendre les pages réactives à la taille de l'écran de l'utilisateur
    window.addEventListener('resize', function() {
        // Ajouter des effets dans les parties de vos pages qui s’y prêtent le mieux
        const sections = document.querySelectorAll('.section');

        sections.forEach(section => {
            // Ajouter ici d'autres fonctionnalités réactives à la taille de l'écran
        });
    });
});
