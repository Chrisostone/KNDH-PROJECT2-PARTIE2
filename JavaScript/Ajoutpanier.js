// Fonction pour afficher les favoris sur la page

/*div class="Panier">

    <div class="panier-vide"></div>
    <input class="AJpanier1" type="submit" value="Ajouter au panier"  name="pullRouge" price="60$"/>*/
    
function afficherFavoris() {
    // Récupérer les favoris depuis localStorage
    let favoris = JSON.parse(localStorage.getItem('favoris')) || [];
console.log("favoris", favoris)

    // Sélectionner le conteneur où les favoris seront affichés
    
    const imagefavoris = document.getElementById('imagefavoris');

    // Parcourir les favoris et afficher chaque image
    favoris.forEach(path => {
        // Créer un élément <img> pour l'image
        const image = document.createElement('img');
        image.src = path;
        image.alt = 'Image favorite';

        // Ajouter l'image au conteneur
        imagefavoris.appendChild(image);
    });
}

// Appeler la fonction pour afficher les favoris lorsque la page se charge
document.addEventListener('DOMContentLoaded', afficherFavoris);
// Récupérer les favoris depuis localStorage
    let favoris = JSON.parse(localStorage.getItem('favoris')) || [];
console.log("favoris", favoris)




/*Ajout deuxieme image de la page femme  imageFAV
S
// Fonction pour afficher les favoris sur la page
function AffichageFAV() {
    // Récupérer les favoris depuis localStorage
    let FAV = JSON.parse(localStorage.getItem('FAV')) || [];
console.log("FAV", FAV)

    // Sélectionner le conteneur où les favoris seront affichés
    //const favorisContainer = document.getElementById('favoris-container');
    const imageFAV = document.getElementById('imageFAV');

    // Parcourir les favoris et afficher chaque image
    FAV.forEach(path => {
        // Créer un élément <img> pour l'image
        const image = document.createElement('img');
        image.src = path;
        image.alt = 'Image favorite';

        // Ajouter l'image au conteneur
        imageFAV.appendChild(image);
    });
}

// Appeler la fonction pour afficher les favoris lorsque la page se charge
document.addEventListener('DOMContentLoaded', AffichageFAV);*/





























