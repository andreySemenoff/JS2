class Products {
    constructor(container=`.products`){
        this.container = container;
        this.data = [];
        this.allProduct = [];
        this.init();
    }
    init(){
        this._fetchProducts();
        this._render();
        this._summ()
    }
    _fetchProducts(){
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Keyboard', price: 200},
            {id: 3, title: 'Mouse', price: 47},
            {id: 4, title: 'Gamepad', price: 87},
            {id: 5, title: 'Chair', price: 187},
        ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let el of this.data) {
            const product = new ProductItem(el);
            this.allProduct.push(product);
            block.insertAdjacentHTML('beforeend', product.render())
        }
    }
    _summ(){ // функция расчета суммы стоимости товаров в каталоге
        let summPrice = 0;
        for (let i = 0; i < this.data.length; i++) {
            summPrice += this.data[i].price;
        }
        const blockSumDiv = `<div>
                                <h2>Стоимость всех товаров = ${summPrice}</h2>
                            </div>`
        const blockSum = document.querySelector(this.container);
        blockSum.insertAdjacentHTML('beforeend', blockSumDiv)
    }
}

class ProductItem {
    constructor(el, img='https://placehold.it/200x150'){
        this.title = el.title;
        this.id = el.id;
        this.price = el.price;
        this.img = img;
    }
    render() {
            return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

/* class Cart {
    constructor(container=`.myCart`){ 
        this.container = container;
        this.dataCart = []; //получаем массив данных с товарами корзины
        this.allCart = []; //получаем всю корзину 
        this.init(); // запускаем функции
    }
    init(){
        this._fetchCart(); // получаем от сервера данные с перечнем товаров в корзине
        this._renderCart(); //добавляем перечень полученных товаров на страницу
        this._summProducts() // расчет стоимости товара с учетом количества
        this._summCart() //расчет стоимость всей корзины
        this._delProducts() //удаление товара из корзины
        this._delCart() //удаление всех товаров корзины
    }
    _fetchCart(){
        
    }
    _renderCart(){
        
    }
    _summProducts(){ 

    }
    _summCart(){ 

    }
    _delProducts(){ 

    }
    _delCart(){ 

    }
} */

/* class CartItem extends ProductItem { // класс продукт в корзине наследуем свойства от ProductItem + добавляем количество и кнопку удалить товар
    constructor(el, img='https://placehold.it/100x50', quantity){ // уменьшил размер картинки
        super(el, img);  // также как и в товарах
        this.quantity = quantity // добавляется поле количество
    }
    render() { //создаем товар на странице
        return `<div class="product-item">
                <img src="${this.img}" alt="${this.title}">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <input type="number" min="1" value="1">  //добавляем поле количество
                    <button class="buy-btn">Удалить</button>  //меняем значение кнопки на удалить
                </div>
            </div>`
    } 
    delProd() { // удаляем товар при нажатии на кнопку удалить

    }
} */
const products = new Products();

// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Keyboard', price: 200},
//     {id: 3, title: 'Mouse', price: 47},
//     {id: 4, title: 'Gamepad', price: 87},
//     {id: 5, title: 'Chair', price: 187},
// ];
//
// const renderProduct = (title, price, img='https://placehold.it/200x150') => {
//     return `<div class="product-item">
//                  <img src="${img}" alt="${title}">
//                  <div class="desc">
//                      <h3>${title}</h3>
//                      <p>${price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };
//
// const renderPage = list => {
//     // document.querySelector(`.products`).innerHTML = list.map(el => renderProduct(el.title, el.price)).join('');
//     for(let el of list){
//         document.querySelector(`.products`).insertAdjacentHTML('beforeend', renderProduct(el.title, el.price));
//     }
// };
//
// renderPage(products);