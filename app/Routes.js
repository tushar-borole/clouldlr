/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';

export default () => (
  <App>
    <div className="window">
      <header className="toolbar toolbar-header">
        <h1 className="title">Photons</h1>
      </header>
      <div className='window-content'>
        <Switch>
            <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </div>
    </div>
    <footer className="toolbar toolbar-footer">
      <h1 className="title">Footer</h1>
    </footer>
  </App>
);
