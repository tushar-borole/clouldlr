import get from 'lodash.get';

export const selectLogEvents = state => get(state, 'logviewReducer.logs', []);
export const sectedTabLogGroup = state => get(state, 'tabbarReducer.selected_tab', "");
