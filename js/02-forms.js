/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

// блок выборкиэлиментов
const form = document.querySelector('.js-register-form');

// блок подписок
form.addEventListener('submit', onFormSubmit);

// блок всех оброботчиков подписок
function onFormSubmit(event){

    // предотваратить по умолчанию
    event.preventDefault();

    // currentTarget - ссылается на элимент который прослушивается в даный момент
    // elements - все элимнты нашей формы
    // const formElements = event.currentTarget.elements;

    // const mail = formElements.email.value;
    // const password = formElements.password.value;
    // const subscription = formElements.subscription.value;

    // const formData = {
    //     mail,
    //     password,
    //     subscription,
    // }

    // formData - собирает значение всех полей
    const formData = new FormData(event.currentTarget);

    // первый параметр значение полей, второй имя
    formData.forEach((value, name) => console.log(name, value));
}