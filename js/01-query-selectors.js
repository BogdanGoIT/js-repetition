const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

// // главнющий обьект хранит все что доступно в браузере
// console.log(window)

// // document - обьект который содержит весь наш дом и все обьекты для работы с ним
// console.dir(document)

// ваш код выполняеться после того как построено HTML DOM - дерево
magicBtn.addEventListener('click', ()=>{

    // переменная для хранения элимента приставка El - элемент или Ref - ссылка
    let navEl;

    // querySelector - это метод на обьекте документ, необходимо передать css-селектор
    navEl = document.querySelector('.site-nav');

    // querySelector - вернет ссылку на первый найденный элемент, ищет от верха(корня вашего документа) или null
    console.log(navEl);

    // найти список всех однотипных элимнтов внутри navEl
    const navLinksEl = navEl.querySelectorAll('.site-nav__link');

    // querySelectorAll - возвращает коллекцию в виде массива или []
    console.log(navLinksEl);
    
})


// Сначала HTML создаеться DOM - дерево в результате после чего у нас выполняеться javaScript

/*
 * Document.querySelector* и Element.querySelector*
 */