import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

export function DataRequest() {
  const [posts, setPosts] = useState([]);
  const [loadPosts, setLoadPosts] = useState(false);
  const [snippet, setSnippet] = useState(false);

  useEffect(() => {
    setSnippet(false);
    if (loadPosts) {
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then((request) => request.json())
        .then((data) => setPosts(data));
    }
  }, [loadPosts, snippet]);

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
