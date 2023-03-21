/*
 * isEmpty()
 */

// // пустой обьект
// console.log(_.isEmpty({}));

// // не пустой обьект
// console.log(_.isEmpty({a: 1}))

/*
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */

const user = {
    name: 'mango',
    // location: {
    //     city: 'Lviv',
    // },
};

// console.log(_.get(user, 'location.city'));

// console.log(user.location.city);

// if (user && user.location && user.location.city) {
//     console.log(user.location.city);
// }

// // если этого свойства нет, то дальше уже не ищи
// // если user?.location? === true => попытаеться взять свойство city
// // если user?.location? === false => undefined
// console.log(user?.location?.city);

/*
 * union()
 */

// возьми только уникальные элимент (не повторяющиеся)
// console.log(_.union([1, 2, 3], [3, 4, 5]));

/*
 * range()
 * _.range([start=0], end, [step=1])
 */

// сделать массив от 3 до 10 с шагом 2
// console.log(_.range(3, 10, 2))

/*
 * sortBy()
 * _.sortBy(collection, [iteratees=[_.identity]])
 */

var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];

// кинь коллекци, отсортировать по нескольким полям
// console.log(_.sortBy(users, ['user', 'age']))

/*
 * sum(array) и sumBy()
 * _.sumBy(array, [iteratee=_.identity])
 */

// подсчитать сумму чисел
// console.log(_.sum([4, 2, 8, 6]))

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// console.log( _.sumBy(players, player => player.timePlayed))


/*
 * uniq() и uniqBy()
 * sortedUniq() и sortedUniqBy()
 */


// возьми уникальные числа
// console.log(_.uniq([2, 1, 2]));


/*
 * random()
 */


/*
 * min() и max()
 * minBy() и maxBy()
 */

// console.log(Math.min(...[1,2,3,4,5]))

// console.log(_.min([1,2,3,4,5]))

// выбири игрока который хуже всех сыграл
// console.log(_.minBy(players, player => player.timePlayed))


/*
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */

console.log(_.camelCase('Foo Bar'));
// => 'fooBar'
 
_.camelCase('--foo-bar--');
// => 'fooBar'
 
_.camelCase('__FOO_BAR__');
// => 'fooBar