const menuHamburgerOpen = document.querySelector(".menu__hamburger-open")

document.getElementById("btn-menu-hamburger").addEventListener("click",
  () =>  {
    menuHamburgerOpen.style.animation = "openLeft";
    menuHamburgerOpen.style.  transition: width 0.5s ease;
    menuHamburgerOpen.style.  transform: translateX(-100%);
    menuHamburgerOpen.classList.add("active")
  }
);

document.getElementById("menu__hamburger--bg-bottom").addEventListener("click",
  () => menuHamburgerOpen.classList.remove("active")
);