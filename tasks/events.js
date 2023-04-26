const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');

// function showModal (){
//     overlay.classList.remove('hide');
// }

// function hideModal () {
//     overlay.classList.add('hide');
// }

// function toggleModal(event){
//     const {code} = event;
//     console.log(overlay.classList.contains('hide'))
//     console.log(code)
//     if(code === "Escape" ){
//         if(overlay.classList.contains('hide')){
//             return;
//         }
//         overlay.classList.toggle('hide');
//         return;
//     }

//     overlay.classList.toggle('hide');
// }

// openBtn.addEventListener('click', toggleModal);
// closeBtn.addEventListener('click', toggleModal);

// addEventListener('keydown', toggleModal)


// 1 при роботі з формою опрацьовуємо подію submit
// 2 всі дані які ми пишемо в форму збирігаються в полі value
// 3 значення цього атрибута зберігається завжди в форматі рядочка 

const form = document.querySelector('.form');
const email = document.querySelector('.email');
const password = document.querySelector('.password')

function handleSubmit(e){
    e.preventDefault();
    const formData = {
        email: email.value,
        password: password.value,
    }
    console.log(formData);

    // очичтити форму 
    form.reset()
}

form.addEventListener('submit', handleSubmit)


