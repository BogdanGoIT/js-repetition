const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */



    // const navEl = document.querySelector('.site-nav');

    // // у каждого элемента есть специальный интерфей calsslist, где хранится массив всех класов текущего элемента
    // console.log(navEl.classList);
    
    // // добавить класс или классы через запятую
    // navEl.classList.add('super-cool', 'qwqeqe');

    // // удалить класс или классы через запятую
    // navEl.classList.remove('qwqeqe', 'super-cool');


    // // magicBtn.addEventListener('click', () => {

    // //     // toggle - если есть снимит, если нет то добавит
    // //     navEl.classList.toggle('qwerty');
    // // })

    // // replace - заменить старый класс на новый 
    // navEl.classList.replace('site-nav', 'qwerty');

    // // А есть ли этот класс на элементе?
    // console.log(navEl.classList.contains('qwerty'))


    const currentPageUrl = '/portfolio';

    // находим текущий элемент по селектору атрибута
    const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);

    // у любого элимента с классом .site-nav__link у которого href= атрибут совпадает с currentPageUrl найди нам его
    console.log(linkEl);

    linkEl.classList.add('site-nav__link--current');
