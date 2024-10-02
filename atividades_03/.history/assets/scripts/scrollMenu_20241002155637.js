window.addEventListener('scroll', function() {
  const headerBottom = document.querySelector('.header__content--bottom');
  if (window.scrollY > 150) {
    headerBottom.classList.add('fixed');
    headerBottom.style.top
  } else {
    headerBottom.classList.remove('fixed');
  }
});