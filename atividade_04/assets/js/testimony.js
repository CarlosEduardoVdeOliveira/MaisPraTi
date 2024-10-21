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
  slidesPerView: 1,
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
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    }
  }
});