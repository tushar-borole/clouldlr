import { connect } from 'react-redux';
import TabsBar from './TabsBar';
import { selectedLogGroups, getActiveTab } from './TabsBarSelector';
import selectTab from './TabsBarAction';
import { fetchLogEvents } from '../LogView/LogViewAction';

function mapStateToProps(state) {
  return {
    selectedLogGroups: selectedLogGroups(state),
    activeTab: getActiveTab(state)
  };
}

const mapDispatchToProps = dispatch => ({
  selectTab: tab => dispatch(selectTab(tab)),
  fetchLogEvents: active => dispatch(fetchLogEvents(active))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsBar);
