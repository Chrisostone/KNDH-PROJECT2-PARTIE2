const game = document.querySelector('.memory-game');
const cardImages = [
    { name: "product1", img: "image1.jpg" },
    { name: "product2", img: "image2.jpg" },
];

let cardsChosen = [];
let cardsChosenIds = [];

function createBoard() {
    cardImages.concat(cardImages).sort(() => 0.5 - Math.random()).forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.setAttribute('data-id', index);
        card.innerHTML = `
            <img class="front-face" src="${item.img}" alt="${item.name}" />
            <div class="back-face"></div>
        `;
        card.addEventListener('click', flipCard);
        game.appendChild(card);
    });
}

function flipCard() {
    const selectedCard = this;
    selectedCard.classList.add('flip');
    cardsChosen.push(cardImages[this.getAttribute('data-id')].name);
    cardsChosenIds.push(this.getAttribute('data-id'));

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('.memory-card');
    const [id1, id2] = cardsChosenIds;

    if (cardsChosen[0] === cardsChosen[1] && id1 !== id2) {
        alert('Vous avez trouvé une paire!');
        cards[id1].removeEventListener('click', flipCard);
        cards[id2].removeEventListener('click', flipCard);
    } else {
        cards[id1].classList.remove('flip');
        cards[id2].classList.remove('flip');
    }

    cardsChosen = [];
    cardsChosenIds = [];
}

createBoard();
