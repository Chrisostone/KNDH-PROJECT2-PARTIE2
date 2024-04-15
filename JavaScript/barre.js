document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission normale du formulaire
        
        const query = searchInput.value.trim();

        if (query === '') {
            // Gérer le cas où la recherche est vide
            alert('Veuillez entrer un terme de recherche.');
            return;
        }

        // Rediriger vers la page d'erreur pour cet exemple
        window.location.href = '../html/error.html'; // Assurez-vous que cette URL est correcte
    });
});
