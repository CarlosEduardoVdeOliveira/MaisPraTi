/*
8. Criando Novos Arrays a Partir de Objetos
○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/
let filmes = [
  {title: "O Hobbit", diretor: "Sei-lá", yearLancamento: 2020},
  {title: "O Homem de Ferro", diretor: "Não-Sei", yearLancamento: 2010},
  {title: "A Bruxa", diretor: "Sei-Não", yearLancamento: 2012},
  {title: "O Poço", diretor: "Sei-lá", yearLancamento: 2014},
  {title: "Carros", diretor: "Estrela", yearLancamento: 2007},
]
let nameFilmes = [];
filmes.forEach(filme => nameFilmes.push(filme.title));
console.log(nameFilmes);
