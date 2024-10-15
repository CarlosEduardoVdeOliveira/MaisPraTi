const idHistory = document.getElementById("history")
const idMascot = document.getElementById("mascot")
const idUniform = document.getElementById("uniform")
const classHistory = document.querySelector(".history")
const classMascot = document.querySelector(".mascot")
const classUniform = document.querySelector(".uniform")


function active(btnActive, btnDesative1, btnDesative2){
  btnActive.style.display = "flex"
  btnDesative1.style.display = "none"
  btnDesative2.style.display = "none"
}
idHistory.addEventListener("click", () => active())
idMascot.addEventListener("click", () => active())
idUniform.addEventListener("click", () => active())