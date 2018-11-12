// @flow
import { createAction } from 'redux-actions';
import SELECTED_TAB from './TabsBarConstant';

const selectTab = createAction(SELECTED_TAB);

export default selectTab;
