import get from 'lodash.get';

export const selectedLogGroups = state =>
  get(state, 'sidebarReducer.selected_logs', []);

export const getActiveTab = state =>
  get(state, 'tabbarReducer.selected_tab', []);
