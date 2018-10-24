// @flow
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LogViewer from './LogViewer';

type Props = {
  fetchLogEvents: () => void
};

export default class LogView extends Component<Props> {
  props: Props;

  componentWillMount() {
    const { fetchLogEvents } = this.props;
    fetchLogEvents();
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    const { logs } = this.props;
    return (
      <div className="pane">
        <LogViewer logs={logs} />
      </div>
    );
  }
}
