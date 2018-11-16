/* eslint-disable react/forbid-prop-types */
// @flow
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import styles from './SideBar.scss';
import { history } from '../../store/configureStore';

class SideBar extends Component {
  state = {
    anchorEl: null
  };

  componentWillMount = () => {
    const { fetchLogGroups } = this.props;
    fetchLogGroups();
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    console.log(this.props);
    history.push('/');
    this.setState({ anchorEl: null });
  };

  addToTabs = logGroupName => {
    const { selectLogGroup, selectTab } = this.props;
    selectLogGroup(logGroupName);
    selectTab(logGroupName);
  };

  render() {
    const { logs } = this.props;
    console.log(logs);
    const { anchorEl } = this.state;

    return (
      <div className={styles.SideBar}>
        <div>
          <Button
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            Setting
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <List>
          {logs.map(value => (
            <ListItem
              key={value.logGroupName}
              role={undefined}
              dense
              button
              onClick={this.addToTabs.bind(this, value.logGroupName)}
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
  logs: PropTypes.array.isRequired,
  selectLogGroup: PropTypes.func.isRequired,
  selectTab: PropTypes.func.isRequired
};

export default SideBar;
