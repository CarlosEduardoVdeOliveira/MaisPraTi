const menuOpen = document.getElementById("btn-menu-hamburger");
const nav = document.getElementById("nav-menu");
const navMenuList = document.getElementById("nav-menu-list");
const links = document.querySelectorAll(".link")



menuOpen.addEventListener("click", () => {
  if (nav.className == "header__nav--container") {
    nav.classList.add("menu__hamburger--container")
    navMenuList.classList.add("menu__hamburger--container--list-links")
  links.forEach(link => link.classList.add("menu__hamburger--container--list-item-link"))

  }
})