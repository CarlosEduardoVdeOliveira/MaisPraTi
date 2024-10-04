const menuOpen = document.getElementById("btn-menu-hamburger");
const nav = document.getElementById("nav-menu");
const navMenuList = document.getElementById("nav-menu-list");
const links = document.querySelectorAll(".link")


menuOpen.addEventListener("click", () => {
  alert()
  nav.classList.toggle("menu__hamburger--container")
  navMenuList.classList.toggle("menu__hamburger--container--list-links")
  links.forEach(link => link.classList.toggle("menu__hamburger--container--list-item-link"))
})