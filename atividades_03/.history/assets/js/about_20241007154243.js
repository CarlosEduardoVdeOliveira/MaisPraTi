const history = document.getElementById("history")
const mascot = document.getElementById("mascot")
const uniform = document.getElementById("uniform")
const links = document.querySelectorAll(".main__content--about a")

function active(link){
  console.log(link);
  
}
history.addEventListener("click", () => active(links))