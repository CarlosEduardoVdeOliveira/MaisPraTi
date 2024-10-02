const menuHamburgerOpen = document.querySelector(".menu__hamburger-open")

document.getElementById("btn-menu-hamburger").addEventListener("click",
  () =>  menu.classList.toggle("active");
);
document.getElementById("menu__hamburger--bg-bottom").addEventListener("click",
  () => menuHamburgerOpen.style.display = 'none'
);