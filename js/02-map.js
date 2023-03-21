/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

const numbers = [5, 10, 15, 20, 25];

// map - также передаем ф-цию, которая будет вызываться столько раз сколько элиментов в массиве
const doubledNums = numbers.map(number => {
    // console.log(number);

    return number * 2;
})

// console.log('numbers', numbers);

// // на место результата ставит то что вернет эта ф-ция
// console.log('doubledNums', doubledNums);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
  console.table(players);

/*
 * Получаем массив имён всех игроков
 */

const playerNames = players.map(player => {
    // console.log(player);

    return player.name;
})
// console.log(playerNames)

const playerIds = players.map(player => player.id);
// console.log(playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

const updatePlayers = players.map(player => {
    // console.log(player);

    // 1 перебрал player в массиве players
    // 2 на место каждого обьекта в новом массиве, вернул новый обьект
    return {
        // 3 распылил все свойства старого обьекта
        ...player,

        // 4 потом и у каждого из них свойства points заменил
        points: player.points * 1.1,
    };
});

// console.table(updatePlayers)

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player => {
    if(playerIdToUpdate === player.id ){
        
        // 1 если нужно обновить человека, возвращаю новый обьект
        return {
            // 2 сначала распыляю старый обьект
            ...player,

            // 3 заменяю значения свойства timePlayed
            timePlayed: player.timePlayed + 100,
        };
    }
   
    // если ничего не нужно обновлять, возвращаю ссылку на старый обьект
    return player
})

// const updatedPlayers = players.map(player => 
//     playerIdToUpdate === player.id ? {
//         ...player,
//         timePlayed: player.timePlayed + 100,
//     } : player,
// )

console.table(updatedPlayers)

// map - не используется для ф-ции, для поиска, он используется для обновления всего или одного, и используется для выборки