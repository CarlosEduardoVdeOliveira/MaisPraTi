const menuOpen = document.getElementById("btn-menu-hamburger");
const nav = document.getElementById("nav-menu");
const navContainer = document.getElementById("nav-menu-list");
const links = document.querySelectorAll(".link");

menuOpen.addEventListener("click", ()=>{
  nav.classList.add("menu__hamburger--container")
  navContainer.classList.add("menu__hamburger--container--list-links")
  
})