/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const string = 'JavaScript';

// метод split('') - разбить массив по буквам
const letters = string.split('');
console.log(letters);
let invertedString = '';

for(const letter of letters){
    console.log(letter);

    // сравнить букву оригинал, с вариантом приведенными к нижнему регистру
    // if(letter === letter.toLowerCase()){
    //     console.log('Эта буква в нижнем регистре - ', letter);

    //     invertedString += letter.toUpperCase();
    // }else{
    //     console.log('Эта буква в верхнем регистре - ', letter);
    //     invertedString += letter.toLowerCase();
    // }

    const isEqual = letter === letter.toLowerCase();

    invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
  }
  
  console.log('invertedString: ', invertedString);
