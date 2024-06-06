let cart = [];
let total = 0;

function addToCart(product, price) {
    const item = cart.find(item => item.product === product);
    if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
    } else {
        cart.push({ product, price, quantity: 1, totalPrice: price });
    }
    updateCart();
}

function removeFromCart(product) {
    cart = cart.filter(item => item.product !== product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        total += item.totalPrice;
        cartItems.innerHTML += `
        <tr>
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>R$ ${item.price.toFixed(2)}</td>
            <td>R$ ${item.totalPrice.toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeFromCart('${item.product}')">Remover</button></td>
        </tr>
    `;
    });

    cartTotal.innerHTML = `R$ ${total.toFixed(2)}`;
}

function finalizePurchase() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
    cart = [];
    updateCart();
}

function openModal(img) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = img.src;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}

function openCommentsModal(product) {
    const commentsModal = new bootstrap.Modal(document.getElementById('commentsModal'));
    commentsModal.show();
}

function openRatingAndCommentModal(product) {
    const ratingAndCommentModal = new bootstrap.Modal(document.getElementById('ratingAndCommentModal'));
    ratingAndCommentModal.show();
}


function toggleStar(element) {
    element.classList.toggle('checked');
}

function submitRatingAndComment() {
    const rating = document.querySelectorAll('#starRating .star.checked').length;
    const comment = document.getElementById('commentText').value;
    // Aqui você pode adicionar a lógica para fazer algo com a avaliação e o comentário
    console.log('Avaliação:', rating, 'Comentário:', comment);
    // Feche o modal após enviar a avaliação e o comentário
    const ratingAndCommentModal = new bootstrap.Modal(document.getElementById('ratingAndCommentModal'));
    ratingAndCommentModal.hide();
}