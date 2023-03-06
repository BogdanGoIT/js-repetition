/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

const logItems = function(items){
    for(let i=0; i < items.length; i+=1){
        console.log(items[i]);
    }
}


logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);