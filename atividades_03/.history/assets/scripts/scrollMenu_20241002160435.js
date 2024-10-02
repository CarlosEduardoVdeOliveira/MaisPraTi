window.addEventListener('scroll', function() {
  const headerBottom = document.querySelector('.header__content--bottom');
  if (window.scrollY > 150) {
    headerBottom.classList.add('fixed');
    headerBottom.styç;
  } else {
    headerBottom.classList.remove('fixed');
  }
});