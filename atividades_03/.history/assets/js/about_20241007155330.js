const idHistory = document.getElementById("history")
const idMascot = document.getElementById("mascot")
const idUniform = document.getElementById("uniform")
const classHistory = document.querySelector(".history")
const classMascot = document.querySelector(".mascot")
const classUniform = document.querySelector(".uniform")


function active(btn){
  
}
idHistory.addEventListener("click", () => {
  classHistory.style.display = "flex"
  classMascot.style.display = "none"
  classUniform.style.display = "none"
})