import { connect } from 'react-redux';
import TabsBar from '../components/TabsBar';

function mapStateToProps(state) {
  const logs ="test";
  return {
    logs
  };
}



export default connect(
  mapStateToProps,
  null
)(TabsBar);
