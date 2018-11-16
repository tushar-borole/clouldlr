// @flow
import { createAction } from 'redux-actions';
import AWS from 'aws-sdk';
import {
  RECEIVE_LOG_EVENTS,
  RECEIVE_LOG_EVENTS_FAIL,
  REQUEST_LOG_EVENTS
} from './LogViewConstant';

const os = require('os');
const storage = require('electron-json-storage');

storage.setDataPath(os.tmpdir());

export const requestLogEvents = createAction(REQUEST_LOG_EVENTS);
export const receiveLogEvents = createAction(RECEIVE_LOG_EVENTS);
export const receiveLogEventsFail = createAction(RECEIVE_LOG_EVENTS_FAIL);

export const fetchLogEvents = active => dispatch => {
  dispatch(requestLogEvents());
  const params = {
    logGroupName: active /* required */,
    interleaved: true || false,
    limit: 50
  };
  storage.get('credentials', (error, data) => {
    console.log(data);
    if (error) throw error;
    AWS.config.update({
      region: data.region,
      secretAccessKey: data.secretkey,
      accessKeyId: data.accessKey
    });
    const cloudwatchlogs = new AWS.CloudWatchLogs();
    cloudwatchlogs.filterLogEvents(params, (err, logs) => {
      console.log(err);
      if (err) dispatch(receiveLogEventsFail());
      else dispatch(receiveLogEvents(logs)); // successful response
    });
  });
};
