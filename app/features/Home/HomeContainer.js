import { connect } from 'react-redux';
import Home from './Home';
import { sectedTabLogGroup } from '../LogView/LogViewSelector';

function mapStateToProps(state) {
  const activeTab = sectedTabLogGroup(state);
  return {
    activeTab
  };
}


export default connect(
  mapStateToProps,
  null
)(Home);
