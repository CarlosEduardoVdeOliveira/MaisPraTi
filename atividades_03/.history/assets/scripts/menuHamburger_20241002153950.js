const menuHamburgerOpen = document.querySelector(".menu__hamburger-open")
const menuH
document.getElementById("btn-menu-hamburger").addEventListener("click",
  () =>  {
    menuHamburgerOpen.classList.add("active");

    document.body.style.overflow = "hidden";
    menuHamburgerOpen.style.left = 0
    menuHamburgerOpen.style.top = `${window.scrollY}px`;
    menuHamburgerOpen.style.height = `${window.innerHeight}px`;
    
  }
);

document.getElementById("menu__hamburger--bg-bottom").addEventListener("click",
  () =>{ 
    menuHamburgerOpen.classList.remove("active");
    menuHamburgerOpen.style.left = "-100%"
    document.body.style.overflow = "auto";
  }
);