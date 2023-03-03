
/*
 * Работем с коллекцией карточек в trello
 * - Метод splice(position, num) - деструктивный(изменяет массив) 
 * position - позицию с в которой мы хотим что то удалить
 * num - и кол-во удаляемых элиментов
 * - Удалить
 * - Добавить
 * - Обновить
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  
  console.table(cards);

  
/*
 * Удаление (по индексу), метод indexOf() - позволяет найти индекс элемента в массиве или -1
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// возвращает массив удаленных элементов
// console.log(cards.splice(index, 1));

// console.table(cards);

// если вы хотите добавить элимет в массиве в начало или конец у вас есть метод push() и shift()

// если добавить в середину метод splice(postion, 0, new_element_1, new_element_2, ...):
/*
* position - указываете позицию в которую хотите втавить
* 0 - ничего не удалять
* new_element_1, new_element_2, ... - добавить сколько угодно других элиментов которые хотите вставить
*/
/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;
// cards.splice(index, 0, cardToInsert)
// console.table(cards);


/*
 * Обновление (по индексу) 
- splice(position, 1, new_element_1)
* position - указываете позицию в которую хотите втавить
* 1 - удалить один элимент
* new_element_1 - то что вы хотите туда вставить
 */
const cardToUpdate = 'Карточка-4';

// 1 вы хотите найти index карточки 4
const index = cards.indexOf(cardToUpdate);

// 2 вставить Обновленную карточку 
cards.splice(index, 1, 'Обновленная Карточка - 4');

console.table(cards);