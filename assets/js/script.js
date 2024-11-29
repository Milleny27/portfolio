window.addEventListener("scroll", () => {
    const header = document.querySelector(".header_nav");
    header.classList.toggle("scroll", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
    const bar = document.querySelector(".menu");
    const menu = document.querySelector(".header_menu");

    bar.addEventListener("click", () => {
        menu.classList.toggle("show_menu");
    });
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    grid: {
      fill: "row",
      rows: 1,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    breakpoints: {
        500: {
            slidesPerView: 4,
            grid: {
              fill: "row",
              rows: 1,
            },
          },
        900: {
        slidesPerView: 6,
        grid: {
          fill: "row",
          rows: 1,
        },
      },
      1024: {
        slidesPerView: 10,
        grid: {
          fill: "row",
          rows: 1,
        },
      },
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
  });
