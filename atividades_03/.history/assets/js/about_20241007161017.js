const idHistory = document.getElementById("history")
const idMascot = document.getElementById("mascot")
const idUniform = document.getElementById("uniform")
const btns = document.querySelectorAll(".main__content--about a")
const classHistory = document.querySelector(".history")
const classMascot = document.querySelector(".mascot")
const classUniform = document.querySelector(".uniform")


/* function activeSection(event){
  event.target
} */


do.addEventListener("click", (event) => {
  btns.forEach(btn => console.log(event.target))  ;
  
  /* classHistory.style.display = "flex"
  classMascot.style.display = "none"
  classUniform.style.display = "none" */
})
idMascot.addEventListener("click", () => {
  classHistory.style.display = "none"
  classMascot.style.display = "flex"
  classUniform.style.display = "none"
})
idUniform.addEventListener("click", () => {
  classHistory.style.display = "none"
  classMascot.style.display = "none"
  classUniform.style.display = "flex"
})