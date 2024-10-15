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
      classHistory.style.display = "flex"
      /* event.target.style.color = "blue"
      classMascot.style.display = "none"
      classUniform.style.display = "none" */
      break;
    case "mascot":
      classMascot.style.display = "flex"
      /* classHistory.style.display = "none" */
      /* classUniform.style.display = "none" */
      break;
    case "uniform":
      classUniform.style.display = "flex"
      /* classHistory.style.display = "none" */
      /* classMascot.style.display = "none" */
      break;
    default:
      event.preventDefault()
      break;
  }
})