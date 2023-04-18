const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

magicBtn.addEventListener('click', () => {
    // Это обьект, и у него есть свойства src, alt...
    const imageEl = document.querySelector('.hero__image');
    // console.log('imageEl', imageEl)
    // console.log(imageEl.src);

    // подменяем значение в src
    imageEl.src = 'https:images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480'
    imageEl.alt = 'Это новый котик'

    const heroTitleEl = document.querySelector('.hero__title');
    console.log('heroTitleEl', heroTitleEl)

    // textContent - то что стоит между открывающим и закрывающим тегом (только текстовый контент)
    console.log(heroTitleEl.textContent);
    heroTitleEl.textContent = "Я сладкий пирожочек";

    /*
        * Атрибуты
        * - get(имя-атрибута)
        * - set(имя-атрибута)
        * - remove(имя-атрибута)
        * - has(имя-атрибута)
    */

    // // возвращает значение атрибута (стандартизированый интерфейс для любогоатрибута)
    // // console.log(imageEl.getAttribute('src'));

    // // удалить атрибут
    // imageEl.removeAttribute('src');

    // console.log(imageEl.src);

    // // есть ли такой атрибут?
    // console.log(imageEl.hasAttribute('src'));
})

/*
 * Data-атрибуты
 */

const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
// dataset - достучаться до атрибутов
console.log(actions[0].dataset.action);

// getAttribute() - достучаться до атрибутов
console.log(actions[1].getAttribute('data-action'))

// -

