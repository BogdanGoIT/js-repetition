class Calculometr{
    constructor({selector}){
        this.root = document.querySelector(selector);
        this.form = this.root.querySelector('form');
        this.output = this.root.querySelector('.output')
        console.log(this.form);

        this.bindEvents()
    }

    bindEvents(){
        this.form.addEventListener('submit', e => {

            e.preventDefault();
            const formData = new FormData(this.form);
            let total = 0;
            for(const [name, value] of formData){
                total += Number(value)
            }
            this.form.reset()
            this.output.textContent = total
            console.log(total)
        })
    }
}

new Calculometr({
    selector: '#c-1',
});

new Calculometr({
    selector: '#c-2',
});

















// const form = document.querySelector('form');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const formData = new FormData(form);

//     // перебрать итерируемую сущность
//     for(x of formData){
//         console.log(x);
//     }

//     // если форма на 2-3 поля
//     console.log(e.currentTarget.elements.login.value)
// });