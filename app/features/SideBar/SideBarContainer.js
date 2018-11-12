import { connect } from 'react-redux';
import SideBar from './SideBar';
import { fetchLogGroups, selectLogGroup } from './SideBarAction';
import { selectLogGroups } from './SideBarSelector';
import { selectTab } from '../TabsBar/TabsBarAction';

function mapStateToProps(state) {
  const logs = selectLogGroups(state);
  return {
    logs
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchLogGroups: () => dispatch(fetchLogGroups()),
  selectLogGroup: (logGroup) => dispatch(selectLogGroup(logGroup)),
  selectTab: (tab) => dispatch(selectTab(tab))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
