const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open('GET', url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4) {
//             if(xhr.status !== 200) {
//                 console.log('error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

// на технологии Promise:

// let getRequest =  url => {

//     return new Promise((resolve, reject) => {

//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
        
//         xhr.onreadystatechange = () => {
//             if(xhr.readyState === 4) {
//                 if(xhr.status !== 200) {
//                     reject(console.log('error'));
//                 } else {
//                     resolve(xhr.responseText);
//                 }
//             }
//         };

//         xhr.send();
//     })
// }
    
        

class Products {
    constructor(container=`.products`){
        this.container = container;
        this.data = [];
        this.allProduct = [];
        this._getProducts()
            .then(() => this._render());
    }
    calcSum(){
        // let result = 0;
        // for (let el of this.allProduct){
        //     result += el.price;
        // }
        // // console.log(result);
        // return result
        return this.allProduct.reduce((accum, item) => accum + item.price, 0);
    }
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                this.data = [...data];
            })
            .catch(error => console.log(error));
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let el of this.data) {
            const product = new ProductItem(el);
            this.allProduct.push(product);
            block.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

class ProductItem {
    constructor(el, img='https://placehold.it/200x150'){
        this.product_name = el.product_name;
        this.id_product = el.id_product;
        this.price = el.price;
        this.img = img;
    }
    render() {
            return `<div class="product-item">
                 <img src="${this.img}" alt="${this.product_name}">
                 <div class="desc">
                     <h3>${this.product_name}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

const products = new Products();
console.log(products.calcSum());

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

class CartItem {
    constructor(el, img='https://placehold.it/100x75'){
        this.product_name = el.product_name;
        this.id_product = el.id_product;
        this.price = el.price;
        this.img = img;
    }
    render() {
            return `<div class="product-item">
                 <img src="${this.img}" alt="${this.product_name}">
                 <div class="desc">
                     <h3>${this.product_name}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

window.onload = () => {
    document.querySelector(`.buy-btn`).addEventListener('click', () => {
        console.log ('проверка');
    });
}