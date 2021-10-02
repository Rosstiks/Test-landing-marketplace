let pageWidth = window.matchMedia("(max-width: 767.98px)");
let swiperInitiation = [];
let swiper = document.querySelectorAll(".section__items");
let swiperWrapper = document.querySelectorAll(".section__items-wrapper");
let swiperSlide = document.querySelectorAll(".section__item");

changeViewToSlider();
checkWindowWidth();
pageWidth.addListener(checkWindowWidth);

function checkWindowWidth() {
  console.log(window.innerWidth);
  if (window.innerWidth < 767.98) {
    changeViewToSlider();
  } else {
    changeViewToLayout();
  }
}

function changeViewToLayout() {
  for (let i = 0; i < swiperWrapper.length; i++) {
    swiperWrapper[i].classList.remove("swiper-wrapper");
  }
  for (let i = 0; i < swiperSlide.length; i++) {
    swiperSlide[i].classList.remove("swiper-slide");
  }
  for (let i = 0; i < swiper.length; i++) {
    swiperInitiation[i].destroy(true, true);
    swiper[i].classList.remove("swiper");
  }
}

let changeSectionItems = function () {
  if (window.innerWidth < 767.98) {
    sectionItemsSlider();
  } else {
    sectionItemsLayout();
  }
};

function changeViewToSlider() {
  for (let i = 0; i < swiperWrapper.length; i++) {
    swiperWrapper[i].classList.add("swiper-wrapper");
  }
  for (let i = 0; i < swiperSlide.length; i++) {
    swiperSlide[i].classList.add("swiper-slide");
  }
  for (let i = 0; i < swiper.length; i++) {
    swiper[i].classList.add("swiper");

    swiperInitiation[i] = new Swiper(swiper[i], {
      loop: true,

      pagination: {
        el: ".swiper-pagination",
      },

      breakpoints: {
        280: {
          slidesPerView: 1.16,
        },
        374: {
          slidesPerView: 1.36,
        },
        424: {
          slidesPerView: 1.56,
        },
        474: {
          slidesPerView: 1.76,
        },
        524: {
          slidesPerView: 1.96,
        },
        574: {
          slidesPerView: 2.16,
        },
        624: {
          slidesPerView: 2.36,
        },
        674: {
          slidesPerView: 2.56,
        },
        724: {
          slidesPerView: 2.76,
        },
      },

      spaceBetween: 20,
      autoplay: {},
      speed: 800,
    });
  }
}
