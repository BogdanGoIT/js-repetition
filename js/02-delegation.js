/*
 * Делегирование событий - используется когда у вас есть однотипная коллекция элиментов, и вы хотите обработать какое то одно события, для всех элиментов одинаково
 * - общий слушатель
 * - фильтр цели клика
 */

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

// свойство textContent - возвращает весь текстовый конткент элемента без тега

function onClick (evt) {
    // если не уходим?
    if(evt.target.nodeName !== 'BUTTON'){
        return;
    }

    console.log('evt.target', evt.target.textContent);
    // console.log('evt.currentTarget', evt.currentTarget);
}

/*
 * Код добавления кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  container.appendChild(btn);
  labelCounter += 1;
}