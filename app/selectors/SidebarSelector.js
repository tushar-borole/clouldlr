import get from 'lodash.get'

export const selectLogGroups = state => get(state, 'sidebarReducer.log_groups',[])
