const idHistory = document.getElementById("history")
const idMascot = document.getElementById("mascot")
const idUniform = document.getElementById("uniform")
const classHistory = document.querySelector(".history")
const classMascot = document.querySelector(".mascot")
const classUniform = document.querySelector(".uniform")


function active(btnActive, btnDesative1, btnDesative2){
  btnActive.style.display = "flex"
  btnDesative1.style.display = "none"
  classUniform.style.display = "none"
}
idHistory.addEventListener("click", () => {
})