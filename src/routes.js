import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Racing from './pages/Racing';
import ScoreBoarding from './pages/ScoreBoarding';
import Teste from './pages/Teste';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/racing' exact component={Racing} />
            <Route path='/score-boarding' exact component={ScoreBoarding} />
            <Route path='/teste' exact component={Teste} />
        </Switch>
    )
}