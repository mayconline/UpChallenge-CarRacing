import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const httpLink = new HttpLink({
  /* Exemplo de Uri Local  */
  // uri: 'http://localhost:3030/graphql'

  /* Uri de produção online */
  uri: 'https://racecargaming.herokuapp.com/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
