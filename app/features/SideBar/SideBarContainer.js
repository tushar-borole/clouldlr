import { connect } from 'react-redux';
import SideBar from './SideBar';
import { fetchLogGroups, selectLogGroup } from './SideBarAction';
import { selectLogGroups } from './SideBarSelector';

function mapStateToProps(state) {
  const logs = selectLogGroups(state);
  return {
    logs
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchLogGroups: () => dispatch(fetchLogGroups()),
  selectLogGroup: (logGroup) => dispatch(selectLogGroup(logGroup))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
