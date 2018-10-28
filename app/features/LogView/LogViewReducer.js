// @flow
import { handleActions } from 'redux-actions';
import {
  RECEIVE_LOG_EVENTS,
  RECEIVE_LOG_EVENTS_FAIL,
  REQUEST_LOG_EVENTS
} from './LogViewConstant';

const logViewReducer = handleActions(
  {
    [RECEIVE_LOG_EVENTS]: (state, action) => ({
      ...state,
      isLoading: false,
      logs: action.payload.events
    }),
    [RECEIVE_LOG_EVENTS_FAIL]: (state, action) => ({
      ...state,
      isLoading: false
    }),
    [REQUEST_LOG_EVENTS]: (state, action) => ({
      ...state,
      isLoading: false
    })
  },
  {}
);

export default logViewReducer;
