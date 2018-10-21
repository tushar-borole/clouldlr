// @flow
import { handleActions } from 'redux-actions'
import {
  RECEIVE_LOG_GROUPS , RECEIVE_LOG_GROUPS_FAIL , REQUEST_LOG_GROUPS
} from '../constants/sidebarConstant'

const sidebarReducer = handleActions({
  [RECEIVE_LOG_GROUPS]: (state, action) => ({...state,
      isLoading: true,log_groups:action.payload.logGroups}),
  [RECEIVE_LOG_GROUPS_FAIL]: (state, action) => ({
      ...state,
      isLoading: false
    }),
  [REQUEST_LOG_GROUPS]: (state, action) => ({
      ...state,
      isLoading: false
    })
}, {})

export default sidebarReducer
