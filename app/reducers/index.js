// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sidebarReducer from './sidebarReducer';
import logviewReducer from './logviewReducer';

const reducers = {
  sidebarReducer,
  logviewReducer
};

export default function createRootReducer(history: {}) {
  const routerReducer = connectRouter(history)(() => {});

  return connectRouter(history)(
    combineReducers({ router: routerReducer, ...reducers })
  );
}
