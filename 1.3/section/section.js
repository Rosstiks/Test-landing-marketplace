const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  slidesPerView: 1.16,
  autoplay: {},
  speed: 800,
});

const mediaQuery = window.matchMedia('(min-width: 768px)')
function handleTabletChange(e) {
  if (e.matches) {
    console.log('Media Query Matched!')
  }
}

mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)