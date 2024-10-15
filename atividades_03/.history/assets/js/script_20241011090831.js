const url = "https://api.api-futebol.com.br/v1/me";
const token = "test_a8c37778328495ac24c5d0d3c3923b"; // Seu token de autorização

fetch(url, {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${token}` // Adicionando o token ao cabeçalho
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json(); // Converte a resposta para JSON
  })
  .then(data => {
    console.log(data); // Exibe os dados retornados pela API
  })
  .catch(error => {
    console.error("Erro:", error); // Exibe o erro, se houver
  });