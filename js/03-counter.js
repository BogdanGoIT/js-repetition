const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += 1
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

// вернет ссылку на 
const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl)

// добавить слушателя события, ф-ция которая будет вызвана при наступлении этого события
decrementBtn.addEventListener('click', function(){
    console.log('кликнули на декримент');

    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
})

incrementBtn.addEventListener('click', function(){
    console.log('кликнули на инкремент');

    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
})