import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import styles from './TabsBar.scss'

class TabsBar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    const { selectTab , selectedLogGroups  } = this.props
    selectTab(selectedLogGroups[value])
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { selectedLogGroups  } = this.props
    console.log(selectedLogGroups)
    return (
      <div className={styles.TabsBar}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            {selectedLogGroups.map(data => (
            <Tab key={data} label={ data } />
            ))}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

TabsBar.propTypes = {
  selectedLogGroups: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired
};

export default TabsBar;
