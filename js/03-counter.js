const counterPlugin = function ({
    rootSelector,
    intitalValue = 0, 
    step = 1,
    onUpdate = () => null,
    } = {}) {
    console.log(onUpdate);
    this._value = intitalValue;
    this._step = step;
    this._refs = this._getRefs(rootSelector);

    this.onUpdate = onUpdate;

    this._bindEvents();
    this.updateValueUI()
}

counterPlugin.prototype._getRefs = function(rootSelector){
    // console.log(rootSelector);
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-increment]');
    refs.decrementBtn = refs.container.querySelector('[data-decrement]');
    refs.value = refs.container.querySelector('[data-value]')

    return refs;
}

counterPlugin.prototype._bindEvents = function(){
    this._refs.incrementBtn.addEventListener('click', () => {
        console.log('CounterPlugin.prototype._bindEvents -> this', this);
        this.increment();
        this.updateValueUI()
    });
    this._refs.decrementBtn.addEventListener('click', () => {
        console.log('CounterPlugin.prototype._bindEvents -> this', this);
        this.decrement();
        this.updateValueUI()
    });
}

counterPlugin.prototype.increment = function(){
    this._value += this._step;
}

counterPlugin.prototype.updateValueUI = function(){
    this._refs.value.textContent = this._value;

    this.onUpdate()
};

counterPlugin.prototype.decrement = function(){
    this._value -= this._step;
}

new counterPlugin({
    rootSelector: 
    '#counter-1', 
    step: 10, 
    intitalValue: 100, 
    onUpdate: () => console.log('Это мой кастомный колбек для onUpdate') 
});

new counterPlugin({rootSelector: '#counter-2', step: 2 });