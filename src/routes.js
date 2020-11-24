import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Adm from './pages/Adm';
import Login from './pages/Login';
import Register from './pages/Register';
import History from './pages/History';

import { isAuthenticated } from './services/auth';

const UserRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated() ? (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        ) : (
            <Component {...props} />
          )
      }
    />
  );

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <UserRoute path="/history" component={History}/>
                <Route path="/adm" component={Adm}/>
            </Switch>
        </BrowserRouter>

    );
}