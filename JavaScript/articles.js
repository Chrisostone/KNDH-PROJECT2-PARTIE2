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

    // Récupérer les favoris existants depuis localStorage, ou créer un tableau vide s'il n'existe pas
     favoris = JSON.parse(localStorage.getItem('favoris')) || [];

    // Ajouter le chemin relatif de l'image aux favoris si elle n'est pas déjà présente
    if (!favoris.includes(imagePath)) {
        favoris.push(imagePath);
    }

    // Enregistrer la liste des favoris mise à jour dans localStorage
    localStorage.setItem('favoris', JSON.stringify(favoris));

    // Optionnel : Afficher un message ou une alerte pour confirmer que l'image a été ajoutée aux favoris
    alert('Article ajoutée aux favoris !');
}

// Ajouter un écouteur d'événements à chaque bouton "Ajouter aux favoris"
const boutonsAime = document.querySelectorAll('.aime');
boutonsAime.forEach(bouton => {
    bouton.addEventListener('click', ajouterAuxFavoris);
    console.log('Ajouter aux favoris !')
});
const boutonsAimer = document.querySelectorAll('.aimer');
boutonsAimer.forEach(bouton => {
    bouton.addEventListener('click', ajouterAuxFavoris);
    console.log('Ajouter aux favoris !')
});




/* Fonction pour ajouter une image aux favoris..

function ajouterAuxFavoris(event) {
    // Obtenir le bouton cliquéS
    const bouton = event.target;

    // Récupérer le chemin relatif de l'image associée au bouton à l'aide d'un attribut de données (data-image-path)
    const imagePath = bouton.getAttribute('data-image-path');
    console.log}
*/
    
/*AJOUT DEUXIEME IMAGE DE LA PAGE FEMME
    Stocker des favoris dans le Local Storage
let imageFAV = ['../image/image21.jpg.jpg'];
localStorage.setItem('imageFAV', JSON.stringify(imageFAV));

    // Récupérer les favoris existants depuis localStorage, ou créer un tableau vide s'il n'existe pas
    imageFAV = JSON.parse(localStorage.getItem('imageFAV')) || [];

    // Ajouter le chemin relatif de l'image aux favoris si elle n'est pas déjà présente
    if (!imageFAV.includes(imagePath)) {
        imageFAV.push(imagePath);
    }

    // Enregistrer la liste des favoris mise à jour dans localStorage
    localStorage.setItem('imageFAV', JSON.stringify(imageFAV));

    // Optionnel : Afficher un message ou une alerte pour confirmer que l'image a été ajoutée aux favoris
    alert('Article ajoutée aux favoris !');
}

// Ajouter un écouteur d'événements à chaque bouton "Ajouter aux favoris"

const boutonsAimer = document.querySelectorAll('.aimer');
boutonsAimer.forEach(bouton => {
    bouton.addEventListener('click', ajouterAuxFavoris);
    console.log('Ajouter aux favoris !')
}); */





