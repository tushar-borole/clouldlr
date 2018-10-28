/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './config/App';
import Home from './features/Home/Home';
import SignIn from './features/SignIn/SignIn';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </App>
);
