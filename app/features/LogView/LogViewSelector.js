import get from 'lodash.get';

export const selectLogEvents = state => get(state, 'logviewReducer.logs', []);
