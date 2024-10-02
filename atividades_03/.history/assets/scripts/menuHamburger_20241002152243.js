const menuHamburgerOpen = document.querySelector(".menu__hamburger-open")

document.getElementById("btn-menu-hamburger").addEventListener("click",
  () =>  {
    menuHamburgerOpen.classList.add("active");
    document.body.style.overflow = "hidden";
    menuHamburgerOpen.style.top = window.scrollY
    menuHamburgerOpen.style.height = window.scrollY + screen.height
    console.log(screen);
    
  }
);

document.getElementById("menu__hamburger--bg-bottom").addEventListener("click",
  () =>{ 
    menuHamburgerOpen.classList.remove("active");
    document.body.style.overflow = "auto";
  }
);