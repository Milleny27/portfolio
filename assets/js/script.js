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

document.addEventListener("DOMContentLoaded", function () {
  const work1Label = document.querySelector(".work1Label");
  const work2Label = document.querySelector(".work2Label");
  const work1 = document.querySelector(".work1");
  const work2 = document.querySelector(".work2");

  work1Label.addEventListener("click", () => {
    if (work2.classList.contains('show_details')) { 
      work2.classList.remove('show_details');
      work2Label.classList.remove('active');
    }
    work1Label.classList.toggle("active");
    work1.classList.toggle("show_details");
  });

  work2Label.addEventListener("click", () => {
    if (work1.classList.contains('show_details')) {
      work1.classList.remove('show_details');
      work1Label.classList.remove('active');
    }
    work2Label.classList.toggle("active");
    work2.classList.toggle("show_details");
  });
});

const swiperSkills = new Swiper(".swiperSkills", {
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

  const swiperProjects = new Swiper(".swiperProjects", {
    slidesPerView: 1,
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
            slidesPerView: 1,
            grid: {
              fill: "row",
              rows: 1,
            },
          },
        900: {
        slidesPerView: 2,
        grid: {
          fill: "row",
          rows: 1,
        },
      },
      1024: {
        slidesPerView: 3,
        grid: {
          fill: "row",
          rows: 2,
        },
      },
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
  });
