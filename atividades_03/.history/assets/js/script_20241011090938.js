const url = "https://api.api-futebol.com.br/v1/campeonatos/10";
const token = "live_50391e8123d7a15f6b6c3161307e14"; // Seu token de autorização

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
   log // Converte a resposta para JSON
  })
  .then(data => {
    console.log(data); // Exibe os dados retornados pela API
  })
  .catch(error => {
    console.error("Erro:", error); // Exibe o erro, se houver
  });