const products = [
    {
        id: 1,
        title: 'Lenovo Yoga',
        price: 3000,
    },
    {
        id: 2,
        title: 'Acer Aspire',
        price: 1800,
    },
    {
        id: 3,
        title: 'Dell Vostro',
        price: 3400
    },
];

let order = [];

function addToBasket(productId) {
    if (order.find(item => item.id == productId)) return alert('Товар уже в корзине');
    order.push(products.find(item => item.id == productId));

    renderCart();
    rerenderTotalPrice();
}

function removeFromBasket(productId) {
    order = order.filter(item => item.id !== productId);

    renderCart();
    rerenderTotalPrice();
}

function rerenderTotalPrice() {
    const totalPrice = order.reduce((acc, item) => acc + item.price, 0);

    document.getElementById('total').innerText = totalPrice;
}

function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = '';
    order.forEach(item => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFromBasket(item.id);
        cart.appendChild(el);
    })
}