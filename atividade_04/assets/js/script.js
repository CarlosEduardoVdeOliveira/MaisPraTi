// script.js
const menuOpen = document.getElementById("btn-menu-hamburger");
const iconOpen = document.querySelector("#btn-menu-hamburger i");
const nav = document.getElementById("nav-menu");

const iconMenuHamburgerOpen = "fa-bars-staggered"
const iconMenuHamburgerClose = "fa-xmark"

menuOpen.addEventListener("click", () => {
  if (nav.className !== "menu-hamburger-container") {
    nav.classList.add("menu-hamburger-container");
    iconOpen.classList.remove(iconMenuHamburgerOpen)
    iconOpen.classList.add(iconMenuHamburgerClose)
  }else if (nav.className === "menu-hamburger-container") {
    nav.classList.remove("menu-hamburger-container");
    iconOpen.classList.add(iconMenuHamburgerOpen)
    iconOpen.classList.remove(iconMenuHamburgerClose)
  }
})
















// Swiper.js - Slider
const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
document.addEventListener('keydown', (event) => {
  if (event.key === "ArrowLeft") {
    swiper.slidePrev();
  }else if (event.key === "ArrowRight") {
    swiper.slideNext()
  }
})
window.onload(setInterval(() => swiper.slideNext(), 5000))

// Validação do formulário
document.getElementById('form-contact').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Mensagem enviada com sucesso!');
});

