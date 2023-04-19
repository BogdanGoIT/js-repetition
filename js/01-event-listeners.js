/*
 * События - это реакция браузера на какие то действия пользователя.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// добавить слушателя событий
addListenerBtn.addEventListener('click', event => {

    // event - событие
    console.log(event)
    console.log('Вешаю слушателя события на целевую кнопку');

    targetBtn.addEventListener('click', onButtonClick)
});

removeListenerBtn.addEventListener('click', event => {

    // event - событие
    console.log(event)
    console.log('Снимаю слушателя события с целевой кнопки');

    targetBtn.removeEventListener('click', onButtonClick)
})

// // куда кликнуть?
// function handleButtonClick () {
//     console.log('Клик')
// }

// // куда?
// function buttonClickHandler(){
//     console.log('Клик')
// }

function onButtonClick(event){
    console.log(event)
    console.log('Клик')
}

function logMessage(){
    console.log('Клик по целевой кнопке');
}