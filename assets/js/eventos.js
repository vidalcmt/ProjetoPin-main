const x = document.querySelector(".ham");
const y = document.querySelector(".nav-menu");

x.addEventListener("click", () => {
    x.classList.toggle('active');
    y.classList.toggle('active');
})