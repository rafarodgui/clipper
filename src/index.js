import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Login from './pages/login'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Login} />
            <Route path={'/main'} component={App} />
        </Switch>
    </BrowserRouter>, 
document.getElementById('root'));