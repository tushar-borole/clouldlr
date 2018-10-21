// @flow
import React, { Component } from 'react';

type Props = {
  fetchLogGroups: () => void
};

export default class SideBar extends Component<Props> {
  props: Props;

  componentWillMount(){
    const { fetchLogGroups } = this.props
    fetchLogGroups()
  }

  componentDidUpdate(){
    console.log(this.props)
  }



  render() {
    const { logs } = this.props
    console.log(logs)
    return (
      <div className="pane-sm sidebar">
        <ul className="list-group">
         {logs.map((item, index) => (
           <li key={item.logGroupName}>{item.logGroupName}</li>
         ))}
        </ul>
      </div>
    );
  }
}
