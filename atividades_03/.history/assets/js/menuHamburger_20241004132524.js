const menuOpen = document.getElementById("btn-menu-hamburger");
const nav = document.getElementById("nav-menu");
const navMenuList = document.getElementById("nav-menu-list");
const links = document.querySelectorAll(".link")
console.log(menuOpen);
console.log(nav);
console.log(navMenuList);
console.log(links);

menuOpen.addEventListener("click", ()=>{
  nav.classList.add("menu__hamburger--container")
  navMenuList.classList.add("menu__hamburger--container--list-links")
  links.forEach(link => link.classList.add("menu__hamburger--container--list-item-link"))
})