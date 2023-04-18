/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * https://www.edu.goit.global/uk/learn/1800401/2294/2300/textbook
 */

const navEl = document.querySelector('.site-nav');
console.log(navEl);

// firstElementChild - вибере перший дочірній вузол-елемент всередині navEl.
const firstNavItemEl = navEl.firstElementChild
console.log(firstNavItemEl);

// lastElementChild - вибере останній дочірній вузол-елемент всередині navEl.
const lastNavItemEl = navEl.lastElementChild
console.log(lastNavItemEl);

// children - получить коллекцию всех детей NavEl.
console.log(navEl.children)