// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import TabsContainer from '../TabsBar/TabsBarContainer';

class LogView extends Component {
  componentWillMount = () => {
    const { fetchLogEvents } = this.props;
    fetchLogEvents();
  };

  componentDidUpdate = prevProps => {
    const { fetchLogEvents, active } = this.props;
    if (prevProps.active !== active) {
      console.log('props changes');
      fetchLogEvents();
    }
  };

  render() {
    const { logs } = this.props;
    return (
      <div className="pane">
        <TabsContainer />
        <List>
          {logs.map(value => (
            <ListItem key={value.eventId} role={undefined} dense button>
              <ListItemText primary={value.message} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

LogView.propTypes = {
  fetchLogEvents: PropTypes.func.isRequired,
  logs: PropTypes.instanceOf(Array).isRequired,
  active: PropTypes.string.isRequired
};

export default LogView;
