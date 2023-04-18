// забрать
import products from './data/proucts.js';

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

const product = {
    name: 'Сервоприводы',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, aperiam exercitationem odit laborum amet, rerum delectus minus ut vel repellendus ducimus quas, asperiores sapiente libero est officiis unde pariatur consequatur!',
    price: 2000,
    available: true,
    onSale: true,
}

{
    /*
  <article class="product">
    <h2 class="product__name">Название</h2>
    <p class="product__descr">Описание</p>
    <p product__pridct>Цена: 1111 кредитов</p>
  </article>
  */
  }

//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const nameEl = document.createElement('h2');
//   nameEl.textContent = product.name
//   nameEl.classList.add('product__name');

//   const descrEl = document.createElement('p');
//   descrEl.textContent = product.description
//   descrEl.classList.add('product__descr');

//   const priceEl = document.createElement('p');
//   priceEl.textContent = `Цена: ${product.price} кредитов`;
//   priceEl.classList.add('product__price');

//   productEl.append(nameEl, descrEl, priceEl);

//   console.log(productEl);
  
  /*
   * Пишем функцию для создания карточки продукта
   */

  // создаю одну карточку, дай мне обьект
  const makeProductCard = ({name, description, price}) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');
  
    const nameEl = document.createElement('h2');
    nameEl.textContent = name
    nameEl.classList.add('product__name');
  
    const descrEl = document.createElement('p');
    descrEl.textContent = description
    descrEl.classList.add('product__descr');
  
    const priceEl = document.createElement('p');
    priceEl.textContent = `Цена: ${price} кредитов`;
    priceEl.classList.add('product__price');
  
    productEl.append(nameEl, descrEl, priceEl);
  
    return productEl;    
  }

console.log(products);

const productsContainerEl = document.querySelector('.js-products')

// для каждого элимента массива products вызови makeProductCard
const elements = products.map(makeProductCard);

console.log(elements);

productsContainerEl.append(...elements)