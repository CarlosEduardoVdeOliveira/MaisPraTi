const history = document.getElementById("history")
const mascot = document.getElementById("mascot")
const uniform = document.getElementById("uniform")

function active(id){
  history.event.preventDefault()
}
history.addEventListener("click", () => active(id))