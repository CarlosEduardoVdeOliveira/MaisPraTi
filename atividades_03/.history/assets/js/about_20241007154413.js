const history = document.getElementById("history")
const mascot = document.getElementById("mascot")
const uniform = document.getElementById("uniform")
const linksAbout = document.querySelectorAll(".main__content--about a")

function active(){
  linksAbout.forEach(link => {
    link.event.prevent
  })
  
}
history.addEventListener("click", () => active(links))