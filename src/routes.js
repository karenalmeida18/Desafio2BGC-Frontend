import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Adm from './pages/Adm';
import Login from './pages/Login';
import Register from './pages/Register';
import History from './pages/History';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/history" component={History}/>
                <Route path="/adm" component={Adm}/>
            </Switch>
        </BrowserRouter>

    );
}