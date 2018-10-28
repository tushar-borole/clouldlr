// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sideBarReducer from '../features/SideBar/SideBarReducer';
import logViewReducer from '../features/LogView/LogViewReducer';

const reducers = {
  sidebarReducer: sideBarReducer,
  logviewReducer: logViewReducer
};

export default function createRootReducer(history: {}) {
  const routerReducer = connectRouter(history)(() => {});

  return connectRouter(history)(
    combineReducers({ router: routerReducer, ...reducers })
  );
}
