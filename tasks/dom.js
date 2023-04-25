const button = document.querySelector('button');

// знайди найближчий div відносно моєї кнопки, не шукає сусідній, а лише вверх по ієрархії
// console.log(button.closest('div'));

// якщо ви називаєте змінні, то змінна має називатися якимось іменноком, для того щоб можна було побчачити що в цій змінній зберігається: дані про користувача, дані про товар, ціна, імя...

// будь яка ф-ція це має бути дієслово, вона має розповідати, що робить?: створює список, додає клас, міняє колір, видаляє елемент зі списку

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const title = document.createElement("h1");

title.textContent = "Hello World";

// cloneNode - зробити копію заголовка
const titleCopy = title.cloneNode(true);

overlay.append(title);
modal.append(titleCopy)