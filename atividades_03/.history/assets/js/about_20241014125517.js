const linksAbout = document.querySelectorAll(".about__link");
const sectionAbout = document.querySelectorAll(".content__about");

linksAbout.forEach((link) =>{
  link.addEventListener("click", (event) => {
    event.pre
    sectionAbout.forEach(section =>{
      if (section.classList.contains(link.id)) {
        section.classList.add("activeLink")
      }else{
        section.classList.remove("activeLink")
      }
    })
  })
})
