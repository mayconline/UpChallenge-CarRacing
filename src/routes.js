import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Racing from './pages/Racing';

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/racing' exact component={Racing} />
        </Switch>
    )
}