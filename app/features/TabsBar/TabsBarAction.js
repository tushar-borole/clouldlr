import { createAction } from "redux-actions";
import { SELECTED_TAB } from './TabsBarConstant';


export const selectTab = createAction(SELECTED_TAB);
