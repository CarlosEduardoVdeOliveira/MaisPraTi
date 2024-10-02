window.addEventListener('scroll', function() {
  const headerBottom = document.querySelector('.header__content--bottom');
  if (window.scrollY > 250) {
    headerBottom.classList.add('fixed');
  } else {
    headerBottom.classList.remove('fixed');
  }
});