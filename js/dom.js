// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object
const button = document.querySelector(".my-button");

const handleClick = event => {
    console.log(event);

    button.removeEventListener("click", handleClick)
  };



button.addEventListener("click", handleClick);


document.addEventListener("keydown", event => {
    console.log("key: ", event.key);
    console.log("code: ", event.code);
  });
  
  document.addEventListener("keyup", event => {
    console.log("Keyup: ", event);
  });




const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"



const heading = document.createElement("h1");
console.log(heading)

heading.textContent = "This is a heading";
console.log(heading)

const image = document.createElement("img");
image.src = "https://placeimg.com/640/480/nature";
image.alt = "Nature";
console.log(image)



const mango = {
    username: "Mango",
    showUsername() {
      console.log(this);
      console.log(`My username is: ${this.username}`);
    },
  };
  
  const btn = document.querySelector(".js-btn");
  
  // ✅ Працює
  mango.showUsername();
  
  // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
  btn.addEventListener("click", mango.showUsername); // не працює
  
  // ✅ Не забувайте прив'язувати контекст методів об'єкта
  btn.addEventListener("click", mango.showUsername.bind(mango));