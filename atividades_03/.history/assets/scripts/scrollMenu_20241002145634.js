window.addEventListener('scroll', function() {
  const headerBottom = document.querySelector('.header__content--bottom');
  if (window.scrollY > 150) {
    headerBottom.style.tra
    headerBottom.classList.add('fixed');
  } else {
    headerBottom.classList.remove('fixed');
  }
});