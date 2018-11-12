import get from 'lodash.get';

const selectLogGroups = state => get(state, 'sidebarReducer.log_groups', []);

export default selectLogGroups;
