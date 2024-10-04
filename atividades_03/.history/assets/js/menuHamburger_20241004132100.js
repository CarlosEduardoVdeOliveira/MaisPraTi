const menuOpen = document.getElementById("btn-menu-hamburger");
const nav = document.getElementById("nav-menu");
const navContainer = document.getElementById("nav-menu-list");
const links = document.querySelectorAll();
const l = document.getElementsByName(".link")

menuOpen.addEventListener("click", ()=>{
  nav.classList.toggle("menu__hamburger--container")
  navContainer.classList.toggle("menu__hamburger--container--list-links")
  links.forEach(link => link.classList.toggle("menu__hamburger--container--list-item-link"))
})