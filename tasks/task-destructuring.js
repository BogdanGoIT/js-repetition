let propName = "name";
const user = {
    // властивість
    age: 25,
}

// коли ми точно знаємо як називається ключ тоді використовуємо крапочку user.name
// якщо назва ключа записана в змінну, або це динамічне значення яке може мінятися від ітерації до ітерації, тоді ви використовуїте квадратні дужки user[propName]

user[propName] = "Генри"; // user["name"] = Генри // user.name = Генри

// назва ключа - та ж сама що назва властивості
console.log(user.age)
