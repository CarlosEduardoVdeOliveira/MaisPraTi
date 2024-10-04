const menuOpen = document.getElementById("btn-menu-hamburger");
const nav = document.getElementById("nav-menu");
const nave = document.getElementById("nav-menu-list");
const links = document.getElementsByName(".link")
console.log(menuOpen);
console.log(nav);
console.log(nave);
console.log(links);

menuOpen.addEventListener("click", ()=>{
  nav.classList.toggle("menu__hamburger--container")
  nave.classList.toggle("menu__hamburger--container--list-links")
  links.forEach(link => link.classList.toggle("menu__hamburger--container--list-item-link"))
})