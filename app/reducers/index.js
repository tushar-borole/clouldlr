// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sidebarReducer from './sidebarReducer';

const reducers = {
  sidebarReducer
}

export default function createRootReducer(history: {}) {
  const routerReducer = connectRouter(history)(() => {});

  return connectRouter(history)(
    combineReducers({ router: routerReducer, ...reducers })
  );
}
