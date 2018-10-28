/* eslint-disable react/forbid-prop-types */
// @flow
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import styles from './SideBar.scss'

class SideBar extends Component {
  componentWillMount = () => {
    const { fetchLogGroups } = this.props;
    fetchLogGroups();
  }

  addToTabs = (logGroupName) => {
    console.log(logGroupName)
  }

  render() {
    const { logs } = this.props;
    return (
      <div className={styles.SideBar}>
        <List>
          {logs.map(value => (
            <ListItem
              key={value.logGroupName}
              role={undefined}
              dense
              button
              onClick={this.addToTabs.bind(this,value.logGroupName)}
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
  fetchLogGroups: PropTypes.func.isRequired,
  logs: PropTypes.array.isRequired
};

export default SideBar;
