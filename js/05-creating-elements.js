/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */
const titleEl = document.createElement('h1');

titleEl.classList.add('page-title');
titleEl.textContent = 'Это заголовок страницы )'
console.log(titleEl);

// в body добавить titleEl в конец как ребенка
document.body.appendChild(titleEl)

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 320;

document.body.appendChild(imageEl)
console.log(imageEl);



// в html что то должно быть куда ты добавляешь

const heroEl = document.querySelector('.hero');

// append - добавить в конец множество элиментов в таком порядке котором я хочу 
heroEl.append(titleEl, imageEl);


/*
 * Создаём и добавляем новый пункт меню
 */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');


const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href='/profile';

// добавить <a> в <li>
navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector(".site-nav");

// добавить <li> в <ul>
// navEl.appendChild(navItemEl);

// добавить перед первым элементом в navEl?
// navEl.insertBefore(navItemEl, navEl.firstElementChild);

// добавить перед последним элементом в navEl?
// navEl.insertBefore(navItemEl, navEl.lastElementChild);

// добавить вторым элиментом в navEl
navEl.insertBefore(navItemEl, navEl.children[1])
console.log(navEl)

// сначала в памяти создал, связал в одну виноградную грозьдь и потом за одну операцию в уже существующий элимент это повесил



