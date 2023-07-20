const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    // перебрать итерируемую сущность
    for(x of formData){
        console.log(x);
    }

    // если форма на 2-3 поля
    console.log(e.currentTarget.elements.login.value)
});