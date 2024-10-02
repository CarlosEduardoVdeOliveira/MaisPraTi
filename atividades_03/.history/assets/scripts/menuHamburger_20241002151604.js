const menuHamburgerOpen = document.querySelector(".menu__hamburger-open")

document.getElementById("btn-menu-hamburger").addEventListener("click",
  () =>  {
    menuHamburgerOpen.classList.add("active");
    //menuHamburgerOpen.style.top = window.scrollY
    document.body.style.overflow = "hidden";
    console.log(window.scrollY);
    
  }
);

document.getElementById("menu__hamburger--bg-bottom").addEventListener("click",
  () =>{ 
    menuHamburgerOpen.classList.remove("active");
    document.body.style.overflow = "auto";
  }
);