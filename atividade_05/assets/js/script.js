const btnAdd = document.querySelector(".addTask");
const inputTask = document.querySelector("input#task")
const btnsEdit = document.querySelectorAll(".edit");
const btnsDelete = document.querySelectorAll(".delete");
const tasks = [
   {id: 1, task: "Limpar casa", status:"open"},
   {id: 2, task: "Limpar casa", status:"open"},
   {id: 3, task: "Limpar casa", status:"open"},
   {id: 4, task: "Limpar casa", status:"progress"},
   {id: 5, task: "Limpar casa", status:"progress"},
   {id: 6, task: "Limpar casa", status:"progress"},
   {id: 7, task: "Limpar casa", status:"done"},
   {id: 8, task: "Limpar casa", status:"done"},
   {id: 9, task: "Limpar casa", status:"done"},

]
btnAdd.addEventListener("click", () => {

})



btnsEdit.forEach(btn => {
   btn.addEventListener("click", () => {
      
   })
})

btnsDelete.forEach(btn => {
   btn.addEventListener("click", () => {
      
   })
})