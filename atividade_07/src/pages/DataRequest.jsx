import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

export function DataRequest() {
  const [posts, setPosts] = useState([]);
  const [loadPosts, setLoadPosts] = useState(false);
  const [snippet, setSnippet] = useState(false);

  useEffect(() => {
    // Este useEffect faz a requisição de dados para a API JSONPlaceholder.
    // O estado `loadPosts` é usado como condição para decidir se a requisição será feita.

    setSnippet(false); // Reseta o estado `snippet` para falso antes de carregar os posts.

    if (loadPosts) {
      // Se `loadPosts` for verdadeiro, inicia a requisição.
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1") // Faz uma chamada para obter posts do usuário com ID 1.
        .then((request) => request.json()) // Converte a resposta da API para JSON.
        .then((data) => setPosts(data)); // Atualiza o estado `posts` com os dados recebidos.
    }
  }, [loadPosts, snippet]);
  // Este efeito será reexecutado quando `loadPosts` ou `snippet` mudar.

  const handleLoaderPosts = () => {
    setLoadPosts(true);
    setSnippet(true);
  };

  return (
    <>
      {loadPosts ? (
        <Container>
          <h2 className="font-bold text-4xl mb-8">Posts</h2>
          {snippet ? (
            <span>Carregando...</span>
          ) : (
            <ul>
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="w-full text-gray-50 flex flex-col justify-between border border-blue-200 rounded-md p-4 mb-2 gap-2"
                >
                  <h3 className="font-bold text-blue-200">{post.title}</h3>
                  <div>{post.body}</div>
                </li>
              ))}
            </ul>
          )}
        </Container>
      ) : (
        <Container>
          <Button onClick={handleLoaderPosts}>Carregar posts</Button>
        </Container>
      )}
    </>
  );
}
