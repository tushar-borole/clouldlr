// @flow
import React, { Component } from 'react';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import TabsContainer from '../TabsBar/TabsBarContainer';


class LogView extends Component {
  componentWillMount() {
    const { fetchLogEvents } = this.props;
    fetchLogEvents();
  }

  componentDidUpdate() {
    const { fetchLogEvents } = this.props;
    // fetchLogEvents()
  }

  render() {
    const { logs } = this.props;
    return (
      <div className="pane">
        <TabsContainer/>
        <List>
          {logs.map(value => (
            <ListItem
              key={value.eventId}
              role={undefined}
              dense
              button
            >
              <ListItemText primary={value.message} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}


export default LogView;
