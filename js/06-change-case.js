/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// 1 создать ф-цию 
const changeCase = function(string){
    // 2 перевести строку в массив 
    const letters = string.split('');
    console.log(letters);

    // 3 создать переменную развернутая строка
    let invertedString = '';

    // 3 перебрать массив по буквенно 
    for(const letter of letters){
        // это в нижнем регистре?
        const isInLowerCase = letter === letter.toLowerCase();
        if(isInLowerCase){
            invertedString += letter.toUpperCase()
            continue;
        }
        // если перебрать до конца то += если до первого совпадения то =
        invertedString += letter.toLowerCase();

        // invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase()   
    }

    return invertedString;
}

console.log(changeCase('sAMSUNG')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX