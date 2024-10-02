window.addEventListener('scroll', function() {
  const headerBottom = document.querySelector('.header__content--bottom');
  if (window.scrollY > 150) {
    headerBottom.classList.add('fixed');
    headerBottom.style.top = 0;
    document.body.style.scrollBehavior = "smooth"
    document.body.style.transitionBehavior = "allow-discrete"
  } else {
    headerBottom.classList.remove('fixed');
  }
});