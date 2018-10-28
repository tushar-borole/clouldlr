// @flow
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import SideBarContainer from '../SideBar/SideBarContainer';
import LogViewContainer from '../LogView/LogViewContainer';
import styles from './Home.scss'

class Home extends Component {
  render() {
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
          <LogViewContainer />
        </main>
      </div>
    );
  }
}


export default Home;
