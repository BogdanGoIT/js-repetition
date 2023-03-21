
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: false },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: false },
  ];
  
  /*
   * Array.prototype.every()
   * - Поэлементо перебирает оригинальный массив
   * - Возвращает true если все элементы массива удовлетворяют условию
   */
  
// для каждого игрока из этой коллекции проверь что player.online
const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline: ', isAllOnline);

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */

const isAnyOnline = players.some(({online}) => online);
console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
console.log('anyHardcorePlayers: ', anyHardcorePlayers);