// Fonction pour ajouter une image aux favoris..

function ajouterAuxFavoris(event) {
    // Obtenir le bouton cliqué
    const bouton = event.target;

    // Récupérer le chemin relatif de l'image associée au bouton à l'aide d'un attribut de données (data-image-path)
    const imagePath = bouton.getAttribute('data-image-path');
    console.log

    

    //Stocker des favoris dans le Local Storage
let favoris = ['../image/image122.jpg.jpg'];
localStorage.setItem('favoris', JSON.stringify(favoris));


/* Récupérer des favoris depuis le Local Storage
const favorisRécupérés = JSON.parse(localStorage.getItem('favoris'));*/

    favoris = JSON.parse(localStorage.getItem('favoris')) || [];

    // Ajouter le chemin relatif de l'image aux favoris si elle n'est pas déjà présente
    if (!favoris.includes(imagePath)) {
        favoris.push(imagePath);
    }

    // Enregistrer la liste des favoris mise à jour dans localStorage
    localStorage.setItem('favoris', JSON.stringify(favoris));

    // Optionnel : Afficher un message ou une alerte pour confirmer que l'image a été ajoutée aux favoris
    alert('Article ajoutée au Panier !');
}

// Ajouter un écouteur d'événements à chaque bouton "Ajouter aux favoris"
const boutonsAJpanier1 = document.querySelectorAll('.AJpanier1');
boutonsAJpanier1.forEach(bouton => {
    bouton.addEventListener('click', ajouterAuxFavoris);
    console.log('Ajouter aux Panier !')
});
/*const boutonsAJpanier1 = document.querySelectorAll('.AJpanier1');
boutonsAJpanier1.forEach(bouton => {
    bouton.addEventListener('click', ajouterAuPanier);
    console.log('Ajouter aux Panier !')
});*/
