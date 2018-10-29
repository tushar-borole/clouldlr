// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import sideBarReducer from '../features/SideBar/SideBarReducer';
import logViewReducer from '../features/LogView/LogViewReducer';
import TabsBarReducer from '../features/TabsBar/TabsBarReducer';

const reducers = {
  sidebarReducer: sideBarReducer,
  logviewReducer: logViewReducer,
  tabbarReducer: TabsBarReducer

};

export default function createRootReducer(history: {}) {
  const routerReducer = connectRouter(history)(() => {});

  return connectRouter(history)(
    combineReducers({ router: routerReducer, ...reducers })
  );
}
