// // ф-ция конструктор чертеж машины, не отвечает на вопрос что сделать
// const Car = function({brand, model, price} = {}){
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// Car.prototype.changePrice = function (newPrice){
//     this.price = newPrice;
// }

// Car.logInfo = function (carObj){
//     console.log('Car.logInfo -> carObj', carObj);
// }

// Car.description = "Клас описывающий автомобитль";

// // 1. Если функция вызывается через new, создаётся пустой объект, собрать машину по конструктору Car
// const myCar = new Car({
//     brand:'Audi', 
//     model: 'Q3', 
//     price: 35000
// });



/*
 * Классы
 * 🐷 - объявление
 * 🐷 - конструктор
 * 🐷 - методы
 * 🐷 - static
 * 🐷 - приватные свойства
 * 🐷 - синтаксис публичных свойства и методы классов
 * 🐷 - геттеры и сеттеры
 */

// Классы новый способ записывать ф-ция конструктор с уже готовым прототипом(свойством prototype)

// ключевое слово class имя и тело
class Car1 {
    // статическое свойство
    static description = "Клас описывающий автомобитль";

    // статическийметод
    static logInfo(carObj){
        console.log('Car.logInfo -> carObj', carObj);
    }

    // приватные свойства
    #test = 'test';

    // публичные свойства
    myPublicFiels = 555;

    // все что идет на экземпляр живет в конструкторе
    constructor({brand, model, price} = {}){
    // публичные свойства
        this.brand = brand;
        this._model = model;
        this._price = price;


    //    this.myPublicFiels = 555;
    }

    set price(newPrice){
        this._price = newPrice;

        // console.log(this.#test);
    }

    get price(){
        return this._price
    }

    // set - установить
    set model(newModel){
        this._model = newModel;
    }
    // setModel(newModel){
    //     this.model = newModel;
    // }

    // get - получить 
    get model(){
        return this._model;
    }
    // getModel(){
    //     return this.model;
    // }
}

const carInstance = new Car1({
    brand:'Audi', 
    model: 'Q3', 
    price: 35000
})

// console.log(Object.getPrototypeOf(carInstance) === Car1.prototype)

console.log(carInstance)

// get
console.log(carInstance.model);
// set
carInstance.model = 'Q4';
// get
console.log(carInstance.model);


console.log(carInstance.price);
carInstance.price = '30000';
console.log(carInstance.price)



