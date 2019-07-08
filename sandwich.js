let data = [];

$('li').click(creatSandwich);

function creatSandwich() {
    
    
    $(this).unbind('click', creatSandwich);
    
    switch ($(this).text()) {
        case 'Маленький гамбургер (50 рублей, 20 калорий)':
            data.push({title: 'маленький гамбургер ', price: 50, calory: 20});
            break;
        case 'Большой гамбургер (100 рублей, 40 калорий)':
            data.push({title: 'большой гамбургер ', price: 100, calory: 40});
            break;
        case 'С сыром (+10 рублей, +20 калорий)':
            data.push({title: 'c сыром ', price: 10, calory: 20});
            break;
        case 'С салатом (+20 рублей, +5 калорий)':
            data.push({title: 'c салатом ', price: 20, calory: 5});
            break;
        case 'С картофелем (+15 рублей, +10 калорий)':
            data.push({title: 'c картофелем ', price: 15, calory: 10});
            break;
        case 'Посыпать приправой (+15 рублей, +0 калорий)':
            data.push({title: 'c приправой ', price: 15, calory: 0});
            break;
        case 'Полить майонезом (+20 рублей, +5 калорий)':
            data.push({title: 'c майонезом ', price: 20, calory: 5});
            break;     
    }
    
    let textOrder = '';
    for (let i = 0; i < data.length; i++) {
        textOrder += data[i].title;       
    }
    $('.textOrder').html(`<p>Ваш заказ: ${textOrder}</p>`);

    let sumPrice = 0;
    for (let i = 0; i < data.length; i++) {
        sumPrice += data[i].price;       
    }
    $('.sumPrice').html(`<h2>Сумма заказа = ${sumPrice} рублей</h2>`);
    
    let sumCalory = 0;
    for (let i = 0; i < data.length; i++) {
        sumCalory += data[i].calory;        
    }
    $('.sumCalory').html(`<h2>Количество калорий = ${sumCalory}</h2>`);
}
