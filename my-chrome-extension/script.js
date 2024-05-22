let button = document.querySelector(".button");
let popup = document.querySelector(".popup");

button.addEventListener("click",() => {
    popup.innerHTML = document.title;
});