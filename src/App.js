import React from 'react';
import GlobalStyled from './globalStyled';
import {BrowserRouter} from 'react-router-dom';
import {ApolloProvider} from '@apollo/react-hooks';

import apolloClient from './services/apollo';

import Routes from './routes';

function App() {
  return (
    <>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <GlobalStyled/>
        <Routes/>
      </BrowserRouter>
    </ApolloProvider>
   
    </>
  );
}

export default App;
