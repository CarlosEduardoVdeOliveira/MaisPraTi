const classHistory = document.querySelector(".history")
const classMascot = document.querySelector(".mascot")
const classUniform = document.querySelector(".uniform")


document.addEventListener("click", (event) => {
  switch(event.target.id){
    case "history":
      classHistory.style.display = "flex"
      /* event.target.style.color = "blue"
      classMascot.style.display = "none"
      classUniform.style.display = "none" */
      break;
    case "mascot":
      /* classHistory.style.display = "none" */
      classMascot.style.display = "flex"
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