let livro = {
  title: "Dom Casmurro",
  author: "Machado de Assis",
  gender: ["Romance", "Ficção", "Realismo Literário", "Memórias"],
  characteristics: function(){ 
    return (`O nome do livro ${this.title}. autor: ${this.author}. Data da publicação: ${this.publicationDate}. numero de paginas: ${this.nPage}`)
  },
  publicationDate: 1899,
  nPage: 286
}
for (const key of Object.keys(livro)) {
  console.log(livro[key]);
}
for (const key in livro) {
  //console.log(`${key}: ${livro[key]}`)
}

let car = {
  name: "Ferrari SF90 Spider",
  color: "black",
  mark: "Ferrari",
  fuelType: "",
  motor: "v8",
  maximumSpeed: 340,
  acelerar: () => "Acelerando..." 
}

for (const key in car) {
  //console.log(`${key}: ${car[key]}`);
  
}
