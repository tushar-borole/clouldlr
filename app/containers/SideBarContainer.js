import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import {fetchLogGroups} from '../actions/sidebarAction';
import { selectLogGroups } from '../selectors/SidebarSelector'

function mapStateToProps(state) {
  const logs = selectLogGroups(state)
  return {
    logs
  };
}


const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchLogGroups: () => dispatch(fetchLogGroups())
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
