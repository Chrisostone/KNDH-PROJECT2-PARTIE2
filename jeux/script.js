const plateau = document.querySelector('.memory-game');
const imagesCartes = [
    { nom: "produit1", image: "image1.jpg" },
    { nom: "produit2", image: "image2.jpg" },
    { nom: "produit3", image: "image3.jpg" }
]

let cartesChoisies = []
let pairesTrouvees = 0 // Compteur pour le nombre de paires trouvées

function creerPlateau() {
    imagesCartes.concat(imagesCartes).forEach((element, index) => {
        const carte = document.createElement('div')
        carte.classList.add('memory-card')
        carte.setAttribute('data-id', index)
        carte.innerHTML = `
            <img class="front-face" src="${element.image}" alt="${element.nom}" />
            <div class="back-face"></div>
        `
        carte.addEventListener('click', retournerCarte);
        plateau.appendChild(carte)
    })
}


function retournerCarte() {
    if (this.classList.contains('flip')) {
        return; // Ne rien faire si la carte est déjà retournée
    }
    this.classList.add('flip')
    cartesChoisies.push(this)

    if (cartesChoisies.length === 2) {
        setTimeout(verifierCorrespondance, 500)
    }
}

function verifierCorrespondance() {
    const [carte1, carte2] = cartesChoisies;
    
    if (carte1.getAttribute('data-id') % imagesCartes.length === carte2.getAttribute('data-id') % imagesCartes.length) {
        carte1.removeEventListener('click', retournerCarte)
        carte2.removeEventListener('click', retournerCarte)
        pairesTrouvees++; // Incrémente le compteur de paires trouvées
        if (pairesTrouvees === imagesCartes.length) {
            setTimeout(() => alert("Félicitations ! Vous avez trouvé toutes les paires."), 500)
        }
    } else {
        carte1.classList.remove('flip')
        carte2.classList.remove('flip')
    }
    cartesChoisies = []
}

creerPlateau()
