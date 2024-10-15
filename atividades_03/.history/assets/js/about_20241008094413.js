/* const classHistory = document.querySelector(".history")
const classMascot = document.querySelector(".mascot")
const classUniform = document.querySelector(".uniform") */
const linksAbout = document.querySelectorAll(".about__link");
const sectionAbout = document.querySelectorAll(".content__about");


linksAbout.forEach((link) =>{
  link.addEventListener("click",(event)=>{
    sectionAbout.forEach(section =>{
      if (section.classList.contains(link.id) === event.target.id) {
        section.classList.add("activeLink")
      }else{
        section.classList.remove("activeLink")
      }
    })
    
  })
})


/* function displayNone(classe){
  classe.style.display = "none"
}
function displayFlex(classe){
  classe.style.display = "flex"
}
document.addEventListener("click", (event) => {
  switch(event.target.id){
    case "history":
      displayFlex(classHistory)
      displayNone(classMascot)
      displayNone(classUniform)
      break;
    case "mascot":
      displayFlex(classMascot)
      displayNone(classHistory)
      displayNone(classUniform)
      break;
    case "uniform":
      displayFlex(classUniform)
      displayNone(classHistory)
      displayNone(classMascot)
      break;
    default:
      break;
  }
}) */