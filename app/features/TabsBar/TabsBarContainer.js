import { connect } from 'react-redux';
import TabsBar from './TabsBar';
import { selectedLogGroups} from './TabsBarSelector'

function mapStateToProps(state) {
  return {
    selectedLogGroups:selectedLogGroups(state)
  };
}



export default connect(
  mapStateToProps,
  null
)(TabsBar);
