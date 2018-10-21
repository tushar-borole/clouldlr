// @flow
import React, { Component } from 'react';
import SideBarContainer from "../containers/SideBarContainer"



type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  componentDidMount(){
  }

  render() {
    return (
      <div className="pane-group">
        <div>
        <SideBarContainer/>
        </div>
        <div className="pane">Main</div>
      </div>
    );
  }
}
