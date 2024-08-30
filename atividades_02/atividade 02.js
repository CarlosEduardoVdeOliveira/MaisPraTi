let book = {
  title: "O Hobbit",
  author: "J.R.R. Tolkien",
  yearOfPublication: "2013",
  genre: "Fantasia"
}
for (const info in book) {
  if (!info.includes("editora")) {
    book.editora = "WMF Martins Fontes";
  }
}
console.log(book);
