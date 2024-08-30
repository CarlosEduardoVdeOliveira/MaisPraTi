let car = {
  mark: "Fiat",
  model: "Punto",
  year: 2012,
  colo: "Vermelho"
}
for (const info in car) {
  console.log(`${info}: ${car[info]}`);
}