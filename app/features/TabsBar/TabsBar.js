import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import styles from './TabsBar.scss'

class TabsBar extends Component {
  handleChange = (event, value) => {
    const { selectTab , selectedLogGroups ,fetchLogEvents } = this.props
    selectTab(value)
  };

  render() {
    const { selectedLogGroups, activeTab  } = this.props
    return (
      <div className={styles.TabsBar}>
        <AppBar position="static">
          <Tabs value={activeTab} onChange={this.handleChange}>
            {selectedLogGroups.map(data => (
            <Tab key={data} value={data} label={ data } />
            ))}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

TabsBar.propTypes = {
  selectedLogGroups: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired,
  active_tab: PropTypes.s
};

export default TabsBar;
