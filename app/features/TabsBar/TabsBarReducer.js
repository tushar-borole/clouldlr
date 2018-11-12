import { handleActions } from 'redux-actions';

import SELECTED_TAB from './TabsBarConstant';

const initialState = { selected_tab: '' };
const tabsBarReducer = handleActions(
  {
    [SELECTED_TAB]: (state, action) => ({
      ...state,
      selected_tab: action.payload
    })
  },
  initialState
);

export default tabsBarReducer;
