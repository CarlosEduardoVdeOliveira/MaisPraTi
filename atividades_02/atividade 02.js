/* 
2. Verificando Propriedades
○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

let book = {
  title: "O Hobbit",
  author: "J.R.R. Tolkien",
  yearOfPublication: "1937",
  genre: "Fantasia"
}
for (const info in book) {
  if (!info.includes("editora")) {
    book.editora = "Amzon";
  }
}
console.log(book);
