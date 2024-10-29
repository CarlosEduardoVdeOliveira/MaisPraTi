//!Drag drop
const containers = document.querySelectorAll(".card-content");

document.addEventListener("dragstart", (event) => {
   event.target.classList.add("dragging");
})
document.addEventListener("dragend", (event) => {
   event.target.classList.remove("dragging");
})

containers.forEach(item => {
   item.addEventListener("dragover", (event) => {
      const dragging = document.querySelector(".dragging");
      const applyAfter = getNewPosition(item, event.clientY);   
      const spanText = document.querySelector(".dragging span")
      console.log(spanText);
      
      if (applyAfter) {
         applyAfter.insertAdjacentElement("afterend", dragging)
         if(applyAfter.parentNode.id === "todo"){
            spanText.classList.remove("progress")
            spanText.classList.remove("done")
         }else if(applyAfter.parentNode.id === "progress"){
            spanText.classList.add("progress")
            spanText.classList.remove("done")
         }else if (applyAfter.parentNode.id === "done") {
            spanText.classList.add("done")
            spanText.classList.remove("progress")
         }
         
      }else{
         item.prepend(dragging)
      }
   })
})

function getNewPosition(cardContainer, positionY){
   const cards = cardContainer.querySelectorAll(".card-item:not(.dragging)");
   let result;

   for (const ref_card of cards) {
      const box = ref_card.getBoundingClientRect();
      const boxCenterY = box.y + box.height / 2;

      if(positionY >= boxCenterY) result = ref_card
   }
   return result
}