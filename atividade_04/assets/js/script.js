import "./aos.js"
import "./menuHamburger.js"
import "./swiper.js"
import "./testimony.js"
import "./gallery.js"
import "./form-validate.js"

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
