const url = "https://api.api-futebol.com.br/v1/campeonatos/10";
const token = "live_50391e8123d7a15f6b6c3161307e14"; // Seu token de autorização

// Função assíncrona para buscar os dados
const Tabela = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}` // Adicionando o token ao cabeçalho
      }
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json(); // Converte a resposta para JSON
    return data; // Retorna os dados
  } catch (error) {
    console.error("Erro:", error); // Exibe o erro, se houver
  }
};

// Chamando a função e exibindo o resultado
Tabela().then(tabela => {
  console.log(tabela); // Exibe a tabela retornada pela API
});

