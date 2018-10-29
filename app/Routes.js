/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './config/App';
import HomeContainer from './features/Home/HomeContainer';
import SignIn from './features/SignIn/SignIn';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/home" component={HomeContainer} />
    </Switch>
  </App>
);
