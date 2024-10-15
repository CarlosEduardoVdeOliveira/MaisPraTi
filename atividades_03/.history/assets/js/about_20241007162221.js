const classHistory = document.querySelector(".history")
const classMascot = document.querySelector(".mascot")
const classUniform = document.querySelector(".uniform")

function displayNone(classe){
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
      classUniform.style.display = "flex"
      displayFlex(classMascot)
      displayNone(classHistory)
      displayNone(classUniform)
      /* classHistory.style.display = "none" */
      /* classMascot.style.display = "none" */
      break;
    default:
      event.preventDefault()
      break;
  }
})