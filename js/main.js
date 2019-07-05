const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Keyboard', price: 200},
    {id: 3, title: 'Mouse', price: 47},
    {id: 4, title: 'Gamepad', price: 87},
    {id: 5, title: 'Chair', price: 187},
];

const renderProduct = (title = 'Notebook', price = 2000) => `<div class="product-item"><h3>${title}</h3><p>${price}</p><button class="buy-btn">Купить</button></div>`;

const renderPage = list => {
    const productsList = list.map(el => renderProduct(el.title, el.price));
    let productsListInBlock = '';
    for (let i = 0; i < productsList.length; i++) {
        productsListInBlock += productsList[i];        
    }
    document.querySelector(`.products`).innerHTML = productsListInBlock;
};

renderPage(products);

