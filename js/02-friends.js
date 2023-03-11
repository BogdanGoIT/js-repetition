/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
  
  console.table(friends);

//   for(const friend of friends){
//     console.log(friend.name);

//     // добавить в обьект friend свойство newprop со значением 555
//     friend.newprop = 555;
//   }

//   console.table(friends);

/*
 * Ищем друга по имени
 */

// const findFriendByName = function (allFriends, friendName) {
//     // includes - работает только с колекцией примитивов
//     // console.log(allFriends.includes(friendName)) // { name: 'Mango', online: false } === 'Poly'
//     for(const friend of allFriends){
//         console.log(friend);
//         console.log(friend.name)

//         if(friend.name === friendName){
//             return 'Нашли!!!'
//         }
//     }

//     return 'НЕ нашли! :(';
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


/*
 * Получаем имена всех друзей
 */

const getAllNames = function (allFriends) {
    const names = [];
    // работаем с коллекцией, вам нужно её перебрать
    for(const friend of allFriends){
        names.push(friend.name)
    }

    return names;
}

// console.log(getAllNames(friends))

/*
 * Получаем имена только друзей которые онлайн
 */
const getOnlineFriends = function (allFriends) {
    const onlineFriends = [];
    for(const friend of allFriends){
        console.log(friend);
        console.log(friend.online)
       if(friend.online){
            onlineFriends.push(friend)
       }
    }
    return onlineFriends;
}

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];
  
    for (const friend of allFriends) {
      console.log(friend.online);
  
      if (!friend.online) {
        offlineFriends.push(friend);
      }
    }
  
    return offlineFriends;
  };
  
//   console.log(getOfflineFriends(friends));

const getFriendsByStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        offline: [],
      };

    for(const friend of allFriends){
        console.log(friend);
        if(friend.online){
            friendsByStatus.online.push(friend);
            continue;
        }
        friendsByStatus.offline.push(friend);

        // const key = friend.online ? 'online' : 'offline';
        // friendsByStatus[key].push(friend);
        
    }
    
    return friendsByStatus
}

console.log(getFriendsByStatus(friends))

const x = {
    a: 1, 
    b: 2,
    c: 50,
    d: 100,
}

// как узнать ко-лво свойств в обьекте
console.log(Object.keys(x).length)