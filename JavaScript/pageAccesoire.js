function showMessage(message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add("message");
    const messageContainer = document.querySelector(".message-container");
    messageContainer.appendChild(messageElement);
    
    // Supprimer le message après 3 secondes (3000 millisecondes)
    setTimeout(function() {
        messageElement.remove();
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".butonp");
    const favoriteButtons = document.querySelectorAll(".favorite-button");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    favoriteButtons.forEach(button => {
        button.addEventListener("click", addToFavorites);
    });

    function addToCart(event) {
        const product = event.target.closest(".product-img");
        const productName = product.querySelector("h3").textContent;
        const productPrice = product.querySelector(".price").textContent;
        const message = `Produit ajouté au panier : ${productName}, Prix : ${productPrice}`;
        showMessage(message);
    }

    function addToFavorites(event) {
        const product = event.target.closest(".product-img");
        const productName = product.querySelector("h3").textContent;
        const message = `Produit ajouté aux favoris : ${productName}`;
        showMessage(message);
    }
});