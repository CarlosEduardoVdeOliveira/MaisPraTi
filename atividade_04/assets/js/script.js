import "./aos.js"
import "./menuHamburger.js"
import "./gallery.js"
import "./form-validate.js"

const testimonies = document.querySelector(".swiper-wrapper3")
const apiUrl = "./assets/js/data.json"
const templateHtml = (user) =>{
  return (`<div data-aos="fade-right" data-aos-duration="1500" class="swiper-slide">
    <img src=${user.photo_url} alt=${user.name} />
    <div class="testimony-content">
      <p>${user.testimony}</p>
      <span>${user.name}</span>
    </div>
    <i class="fa-solid fa-quote-right"></i>
  </div>`)
}

fetch(apiUrl, { method: 'GET' })
  .then(response =>{
    if (!response.ok) {
      return new Error('falhou a requisição')
    }
    if (response.status === 404) {
      return new Error('não encontrou qualquer resultado')
    }
    return response.json();
  })
  .then(users => {
    
    users.forEach(user => {
      testimonies.insertAdjacentHTML('beforeend', templateHtml(user));
    });
    swiper.update();
    AOS.init();
  })
  .catch(err => console.log(err.message))



// Instancia para o terceiro swiper
const swiper = new Swiper('.swiper-container-3', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination-3',
    clickable: true,
  },
  navigation: false,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    }
  }
});
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
