const idHistory = document.getElementById("history")
const idMascot = document.getElementById("mascot")
const idUniform = document.getElementById("uniform")
const classHistory = document.que("history")
const classMascot = document.que("mascot")
const classUniform = document.que("uniform")


function active(btn){
  
}
idHistory.addEventListener("click", () => {
  classHistory.style.display = "flex"
  classMascot.style.display = "none"
  classUniform.style.display = "none"
})