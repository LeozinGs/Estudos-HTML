const hamburger = document.querySelector(".hamburger");
const container = document.querySelector(".container");


hamburger.addEventListener("click", () => {

    container.classList.toggle("open");

});

