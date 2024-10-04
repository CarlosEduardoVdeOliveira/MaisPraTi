const menuOpen = document.getElementById("btn-menu-hamburger");
const iconOpen = document.querySelector("#btn-menu-hamburger i");
const nav = document.getElementById("nav-menu");

const iconMenuHamburgerOpen = "fa-bars-staggered"
const iconMenuHamburgerClose = "fa-xmark"

menuOpen.addEventListener("click", () => {
  if (nav.className === "header__nav--container") {
    nav.style.display = "block";
    nav.classList.add("menu__hamburger--container");
    iconOpen.classList.remove(iconMenuHamburgerOpen)
    iconOpen.classList.add(iconMenuHamburgerClose)
  }else if (nav.className !== "header__nav--container") {
    nav.style.display = "none";
    nav.classList.remove("menu__hamburger--container");
  }
})

























/* navMenuList.classList.toggle("menu__hamburger--container--list-links")
navMenuList.classList.remove("header__nav--list-links")
links.forEach(link => link.classList.toggle("menu__hamburger--container--list-item-link"))
links.forEach(link => link.classList.remove("header__nav--list-item-link")) */