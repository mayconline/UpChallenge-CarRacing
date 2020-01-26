## Modo de Jogo Online

1. URL do backend playgrond para visualizar a documentação e realizar testes =>[Playground](https://racecargaming.herokuapp.com/playground) 

2. URL do End Point de Consulta do servidor Backend para colocar no arquivo apollo.js => [https://racecargaming.herokuapp.com/graphql](https://racecargaming.herokuapp.com/graphql)

3. URL do Jogo Online => [https://racecargaming.netlify.com/](https://racecargaming.netlify.com/)


## Instalação e execução

1. Faça um clone do repositório do servidor => [BackEnd](https://github.com/mayconline/UpChallenge-CarRacing-BackEnd).
2. Entre na pasta do servidor e instale as dependências `cd UpChallenge-CarRacing-BackEnd && npm install`; 
3. Renomeie o arquivo `.env.example` para `.env` e preencha a `MONGO_URL` com a url do seu banco e a `PORT` que deseja rodar o servidor.
4. Rode `npm run dev` para iniciar o servidor.
5. Faça um clone desse repositório =>[FrontEnd](https://github.com/mayconline/UpChallenge-CarRacing);
6. Entre na pasta do projeto e instale as dependências `cd UpChallenge-CarRacing && npm install`;
7. Abra o projeto com seu editor de código, e entre na pasta `/src/services` 
8. Edite o arquivo `apollo.js` e altere a linha `uri` com a Url do seu servidor local e porta.
9. Rode `npm start` para iniciar o frontend e acesse no [http://localhost:3000](http://localhost:3000).

## Rodar o FrontEnd em Modo Produção

1. Faça um clone desse repositório =>[FrontEnd](https://github.com/mayconline/UpChallenge-CarRacing);
2. Entre na pasta do projeto e instale as dependências `cd UpChallenge-CarRacing && npm install`;
3. Rode `npm run build` para gerar a build de produção
4. Rode `npm install -g serve` para instalar o servidor do nodejs
5. Rode `serve -s build` e acesso no [http://localhost:5000](http://localhost:5000)

## Sobre o Jogo

Jogo de corrida feito em React JS, onde o usuário entre com um nickname, e inicia o jogo,
durante o percurso da corrida, podem aparecer em tempos aleatórios pedras no caminho, onde
o usuario deverá desviar para continuar a corrida.<br />

**Teclas de Controle do Jogo**

- Tecla A => Move o carro para a Esquerda
- Tecla S => Move o carro para o Meio
- Tecla D => Move o carro para a Direita

- Seta Esquerda do Teclado => Move o carro para a Esquerda
- Seta Direita do Teclado => Move o carro para a Direita

- Tecla ESC => Pausa e Despausa o Jogo

**O Jogo termina de 2 formas:**<br />
1. Usuario consegue chegar até o final das 4 voltas, e é Campeão do circuito.
2. Usuario bate na pedra, e da Game Over.

**O Usuario consegue pontuação de 2 formas:**<br />
1. Desviando das Pedras.
2. Movimentando o Carro.

Ao Terminar a Corrida, ou dar Game Over, o Cliente faz uma requisição ao servidor da API via
GraphQL, e verifica se o score que o usuário obteve é maior que o anterior obtido pelo mesmo,
caso seja maior, ele atualiza o valor com o score maior, caso seja menor, ele mantém o score anterior.





