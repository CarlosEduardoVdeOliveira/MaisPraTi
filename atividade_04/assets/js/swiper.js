// Swiper.js - Slider
// Instancia para o primeiro swiper
const swiper1 = new Swiper('.swiper-container-1', {
  loop: true,
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
});

// Instancia para o segundo swiper
const swiper2 = new Swiper('.swiper-container-2', {
  loop: true,
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  },
});

window.onload = () => {
  setInterval(() => swiper1.slideNext(), 5000);
  setInterval(() => swiper2.slideNext(), 6000);
};