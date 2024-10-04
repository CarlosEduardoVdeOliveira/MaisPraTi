const menuOpen = document.getElementById("btn-menu-hamburger");
const nav = document.getElementById("nav-menu");

menuOpen.addEventListener("click", () => {
  // Alterna a classe que controla a visibilidade do menu
  nav.classList.toggle("menu__hamburger--container");
});
