import { connect } from 'react-redux';
import TabsBar from './TabsBar';
import { selectedLogGroups} from './TabsBarSelector'
import { selectTab } from './TabsBarAction';

function mapStateToProps(state) {
  return {
    selectedLogGroups:selectedLogGroups(state)
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  selectTab: (tab) => dispatch(selectTab(tab))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsBar);
