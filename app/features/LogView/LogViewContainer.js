import { connect } from 'react-redux';
import LogView from './LogView';
import { fetchLogEvents } from './LogViewAction';
import { selectLogEvents } from './LogViewSelector';

function mapStateToProps(state) {
  const logs = selectLogEvents(state);
  return {
    logs
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { active }  = ownProps
  return {
  fetchLogEvents: () => dispatch(fetchLogEvents(active))
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogView);
