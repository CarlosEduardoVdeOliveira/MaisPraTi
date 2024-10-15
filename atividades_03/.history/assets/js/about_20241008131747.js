const linksAbout = document.querySelectorAll(".about__link");
const sectionAbout = document.querySelectorAll(".content__about");

linksAbout.forEach((link) =>{
  link.addEventListener("click", () => {
    sectionAbout.forEach(section =>{
      if (section.classList.contains(link.id) && link.classList.contains(link.id)) {
        section.classList.add("activeLink")
        link.classList.add("activeLink")
      }else{
        section.classList.remove("activeLink")
        link.classList.remove("activeLink")
      }
    })
  })
})
