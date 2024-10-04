const menuOpen = document.getElementById("btn-menu-hamburger");
const nav = document.getElementById("nav-menu");
const navMenuList = document.getElementById("nav-menu-list");
const links = document.ge(".link")
console.log(menuOpen);
console.log(nav);
console.log(navMenuList);
console.log(links);

menuOpen.addEventListener("click", ()=>{
  nav.classList.toggle("menu__hamburger--container")
  navMenuList.classList.toggle("menu__hamburger--container--list-links")
  links.forEach(link => link.classList.toggle("menu__hamburger--container--list-item-link"))
})