let movies = [
  {title: "O Hobbit", director: "Peter Jackson", yearOfRelease: 2012},
  {title: "Homem de Ferro", director: "Jon Favreau", yearOfRelease: 2008},
  {title: "A Bruxa", director: "Robert Eggers", yearOfRelease: 2016},
  {title: "O Poço", director: "Galder Gaztelu-Urrutia", yearOfRelease: 2020},
  {title: "Carros", director: "John Lasseter", yearOfRelease: 2006},
]
let getTitleMovie = (movies) => {
  let movieTitles = [];
  movies.forEach(movieTitle => movieTitles.push(movieTitle.title));
  return (movieTitles);
}
let moviesTitles = getTitleMovie(movies);
console.log("Títulos dos filmes: ", moviesTitles);
