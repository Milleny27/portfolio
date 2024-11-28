window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scroll", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
    const bar = document.querySelector(".menu");
    const menu = document.querySelector(".header_menu");

    bar.addEventListener("click", () => {
        menu.classList.toggle("show_menu");
    });
});
