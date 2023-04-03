/*
 * Наследование
 *  - extends
 *  - super()
 */

class Hero {
    constructor({name = 'hero', xp = 0} = {}){
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount){
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

// класс Воин дополняет клас Герой
class Warrior extends Hero{
    
    constructor({weapon, ...restProps} = {}){
        console.log('restProps Warrior', restProps)
        // super - вызываем класс родителя Hero
        super(restProps);

        this.weapon = weapon;
    }

    attack(){
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

class Berserk extends Warrior{
    constructor({warcry, ...restProps} = {}){
        console.log('restProps Berserk', restProps);
        // super - вызов конструктора Warrior
        super(restProps);

        this.warcry = warcry
    }

    babyRage(){
        console.log(this.warcry);
    }
}

const ajax = new Berserk({name: 'ajax', xp: 500, weapon: 'axe', warcry: 'ahhahahaaha'});
console.log(ajax);

ajax.babyRage();
ajax.attack();
ajax.gainXp()

// класс Маг дополняет клас Герой
class Mage extends Hero{
    constructor({spells, ...restProps} = {}){
        console.log('restProps Mage', restProps)
        super(restProps);

        this.spells = spells;
    }

    cast(){
        console.log(`${this.name} что то там кастует 🐷`);
    }
}

// const mango = new Warrior({name:'Mango', xp: 1000, weapon:'алебардо'});
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({name:'Poly', xp: 500, spells: ['феербол']});
// console.log(poly);
// poly.cast();
// poly.gainXp(200);

// console.log(
//     'mango.__proto__ === Warrior.prototype ',
//     mango.__proto__ === Warrior.prototype,
// );
// // console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log(
//     'Warrior.prototype.__proto__ === Hero.prototype ',
//     Warrior.prototype.__proto__ === Hero.prototype,
// );

// console.log(
//     'Hero.prototype.__proto__ === Object.prototype ',
//     Hero.prototype.__proto__ === Object.prototype,
// );
