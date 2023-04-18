/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */

const titleEl = document.querySelector('.title');

// // textContent - вернет весь текстовый контент внутри тега, без вложенных тегов
// console.log(titleEl.textContent);

// // innerHTML - возвращает всю вложенную разметку в виде одной строки
// console.log(titleEl.innerHTML)


// // поставь внутрь h2 тег a
// titleEl.innerHTML = '<a href="">Ссылка</a>';

// // innerHtml - используйте когда вам нужно очистить значение элимента или записать поверх новое, не изминяя старое
// titleEl.innerHTML = '';

/*
 * Вставка разметки с insertAdjacentHTML()
 * Сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента:
    * "beforebegin" - перед elem
    * "afterbegin" - всередині elem, перед усіма дітьми
    * "beforeend" - всередині elem, після усіх дітей
    * "afterend" - після elem
 */


titleEl.insertAdjacentHTML('beforeend', '<a href="" class="title__link">Ссылка</a>')