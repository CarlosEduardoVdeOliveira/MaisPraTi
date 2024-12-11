# Projeto de Exercícios com React

Este repositório contém uma série de exercícios práticos desenvolvidos em React para aprender e praticar os conceitos fundamentais da biblioteca, como hooks (`useState`, `useEffect`), renderização condicional, manipulação de listas, formulários, e mais.

## Atividades Incluídas

### 1. Contador Simples

Crie um componente de contador que exibe um número na tela e possui dois botões: **“Incrementar”** e **“Decrementar”**.

- **Tecnologias:** useState.
- **Desafio:** Não permitir que o valor seja menor que zero.

### 2. Alteração de Cor de Fundo

Crie um componente onde o fundo da página muda de cor toda vez que o usuário clica em um botão.

- **Tecnologias:** useState, useEffect.
- **Desafio:** Gerar cores aleatórias em cada clique.

### 3. Lista de Tarefas

Implemente um aplicativo de lista de tarefas onde o usuário pode adicionar e remover tarefas.

- **Tecnologias:** useState.
- **Desafio:** Permitir marcar tarefas como concluídas e filtrar por pendentes.

### 4. Temporizador com useEffect

Crie um temporizador que conta o tempo em segundos e exibe na tela.

- **Tecnologias:** useState, useEffect.
- **Desafio:** Adicionar botões para pausar e reiniciar o temporizador.

### 5. Filtro de Lista

Implemente um componente que renderiza uma lista de nomes e permite filtrar os itens com base no texto digitado.

- **Tecnologias:** useState.
- **Desafio:** Tornar o filtro insensível a maiúsculas e minúsculas.

### 6. Formulário de Registro Simples

Crie um formulário com campos de nome, e-mail e senha, exibindo uma mensagem de boas-vindas ao submeter.

- **Tecnologias:** useState.
- **Desafio:** Adicionar validação para garantir que todos os campos estejam preenchidos.

### 7. Aplicação de Requisição de Dados Simples

Consuma uma API pública (ex.: JSONPlaceholder) para exibir uma lista de posts.

- **Tecnologias:** useEffect.
- **Desafio:** Adicionar botão para recarregar os dados e exibir um indicador de carregamento.

### 8. Galeria de Imagens com Visualização Detalhada

Crie uma galeria onde ao clicar em uma imagem, ela é exibida em um modal.

- **Tecnologias:** useState.
- **Desafio:** Adicionar funcionalidade de fechar e navegação entre imagens.

### 9. Timer com Intervalo e Alerta

Crie um timer onde o usuário define a quantidade de segundos para contagem regressiva.

- **Tecnologias:** useState, useEffect.
- **Desafio:** Exibir alerta ao finalizar e adicionar botões de pausar e reiniciar.

### 10. Componentes com Tabs Navegáveis

Implemente uma interface com abas para exibir conteúdos diferentes ao clicar.

- **Tecnologias:** useState.
- **Desafio:** Adicionar destaque visual na aba ativa.

---

## Orientações para a Entrega

### Estrutura do Projeto

Organize o projeto em uma estrutura de pastas clara:

- **components/**: Contém os componentes criados em cada atividade.

### Comentários no Código

Inclua comentários explicativos, principalmente em trechos mais complexos como o uso de `useEffect` ou lógica de temporizadores.

### Página Principal

Crie uma página principal (`App.js` ou `index.js`) que funcione como menu para acessar cada atividade separadamente. Isso facilita os testes individuais.

---

## Como Executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/usuario/projeto-exercicios-react.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd projeto-exercicios-react
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra o navegador e acesse `http://localhost:3000` ou

6. Acesse o link: https://mais-pra-ti-atividade-07.vercel.app/.

---

## Tecnologias Utilizadas

- React
- Hooks (useState, useEffect)
- HTML, CSS, JavaScript
- API pública (JSONPlaceholder)

---

## Desafios

Cada atividade inclui um desafio adicional para aprimorar as habilidades e incentivar o pensamento criativo.

---

## Contribuição

Sinta-se à vontade para enviar PRs com melhorias ou sugestões!

---

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
