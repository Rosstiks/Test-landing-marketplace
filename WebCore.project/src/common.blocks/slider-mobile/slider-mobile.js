let pageWidth = window.matchMedia("(max-width: 767.98px)");
let swiperInitiation = [];
let swiper = document.querySelectorAll(".slider-mobile");
let swiperWrapper = document.querySelectorAll(".section__items-wrapper");
let swiperSlide = document.querySelectorAll(".section__item");

changeViewToSlider();
checkWindowWidth();
pageWidth.addListener(checkWindowWidth);

function checkWindowWidth() {
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

      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
      speed: 800,
    });
  }
}
