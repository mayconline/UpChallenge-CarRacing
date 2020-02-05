import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyled from './globalStyled';
import Routes from './routes';
import apolloClient from './services/apollo';

function App() {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <GlobalStyled />
          <Routes />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
