import { connect } from 'react-redux';
import LogView from '../components/LogView';
import { fetchLogEvents } from '../actions/logviewAction';
import { selectLogEvents } from '../selectors/logviewSelector';

function mapStateToProps(state) {
  const logs = selectLogEvents(state);
  return {
    logs
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchLogEvents: () => dispatch(fetchLogEvents())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogView);
