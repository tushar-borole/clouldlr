// @flow
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});
class LogViewer extends Component {
  render() {
    const { logs, classes } = this.props;
    return (
      <div>
        <List>
          {logs.map(value => (
            <ListItem
              key={value.eventId}
              role={undefined}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary={value.message} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

LogViewer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LogViewer);
