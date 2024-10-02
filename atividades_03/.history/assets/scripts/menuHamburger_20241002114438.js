const menuHamburgerOpen = document.querySelector(".menu__hamburger-open")

document.getElementById("btn-menu-hamburger").addEventListener("click",
  () =>  {menuHamburgerOpen.classList.add("active")}
);

document.getElementById("menu__hamburger--bg-bottom").addEventListener("click",
  () => menuHamburgerOpen.classList.remove("active")
);