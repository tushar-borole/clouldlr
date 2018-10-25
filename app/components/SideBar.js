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

class SideBar extends Component {
  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  componentWillMount() {
    const { fetchLogGroups } = this.props;
    fetchLogGroups();
  }

  render() {
    const { logs, classes } = this.props;
    console.log(logs);
    return (
      <div className="pane-sm sidebar">
        <List>
          {logs.map(value => (
            <ListItem
              key={value.logGroupName}
              role={undefined}
              dense
              button
              className={classes.listItem}
            >
              <ListItemText primary={value.logGroupName} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideBar);
