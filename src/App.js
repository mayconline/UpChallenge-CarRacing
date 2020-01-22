import React from 'react';
import GlobalStyled from './globalStyled';
import {BrowserRouter} from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyled/>
      <Routes/>
    </BrowserRouter>
   
   
    </>
  );
}

export default App;
