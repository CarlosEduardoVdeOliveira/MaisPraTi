window.addEventListener('scroll', function() {
  const headerBottom = document.querySelector('.header__content--bottom');
  if (window.scrollY > 150) {
    headerBottom.style.transitionDuration = "0.5s"
    headerBottom.stylescroll-behavior: smooth;

    headerBottom.classList.add('fixed');
  } else {
    headerBottom.classList.remove('fixed');
  }
});