// @flow
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import SideBarContainer from '../SideBar/SideBarContainer';
import LogViewContainer from '../LogView/LogViewContainer';
import styles from './Home.scss'

class Home extends Component {
  render() {
    const { activeTab } = this.props
    return (
      <div className={styles.Home}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          classes={{
            paper: styles.drawerpaper
          }}
          open
        >
          <SideBarContainer />
        </Drawer>
        <main className={styles.content}>
          <span>{activeTab}</span>
          <LogViewContainer active={activeTab} />
        </main>
      </div>
    );
  }
}


export default Home;
