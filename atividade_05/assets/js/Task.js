class Task{
   constructor(task){
      this.task = task
   };
   create() {
      let newId = 0
      return {
         task,
         id: newId++
      }
   };
   update(){};
   delete(){};
}

const t = new Task("test")
const t2 = new Task("test")
const t3 = new Task("test")

console.log(t, t2, t3);
