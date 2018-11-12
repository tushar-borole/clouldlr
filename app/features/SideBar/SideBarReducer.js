// @flow
import { handleActions } from 'redux-actions';
import {
  RECEIVE_LOG_GROUPS,
  RECEIVE_LOG_GROUPS_FAIL,
  REQUEST_LOG_GROUPS,
  SELECTED_LOG_GROUPS
} from './SideBarConstant';

const initialState = { selected_logs: [] };
const sideBarReducer = handleActions(
  {
    [RECEIVE_LOG_GROUPS]: (state, action) => ({
      ...state,
      isLoading: true,
      log_groups: action.payload.logGroups
    }),
    [RECEIVE_LOG_GROUPS_FAIL]: state => ({
      ...state,
      isLoading: false
    }),
    [REQUEST_LOG_GROUPS]: state => ({
      ...state,
      isLoading: false
    }),
    [SELECTED_LOG_GROUPS]: (state, action) => ({
      ...state,
      selected_logs: [...state.selected_logs, action.payload]
    })
  },
  initialState
);

export default sideBarReducer;
