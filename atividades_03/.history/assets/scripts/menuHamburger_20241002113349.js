const menuHamburgerOpen = document.querySelector(".menu__hamburger-open")
const btnMenuHamburger = document.getElementById("btn-menu-hamburger")
btnMenuHamburger.addEventListener("click",
  () => menuHamburgerOpen.style.display = 'flex'
)