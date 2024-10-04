const menuOpen = document.getElementById("btn-menu-hamburger");
const nav = document.getElementById("nav-menu");
/* const navMenuList = document.getElementById("nav-menu-list");
const links = document.querySelectorAll(".link") */



menuOpen.addEventListener("click", () => {
  if (nav.className == "header__nav--container") {
    nav.classList.add("menu__hamburger--container")
    nav.classList.remove("header__nav--container")
  }else{
    nav.classList.remove("menu__hamburger--container")
    nav.classList.add("header__nav--container")
  }
})

























/* navMenuList.classList.toggle("menu__hamburger--container--list-links")
navMenuList.classList.remove("header__nav--list-links")
links.forEach(link => link.classList.toggle("menu__hamburger--container--list-item-link"))
links.forEach(link => link.classList.remove("header__nav--list-item-link")) */