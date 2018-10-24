// @flow
import { createAction } from 'redux-actions';
import AWS from 'aws-sdk';
import {
  RECEIVE_LOG_EVENTS,
  RECEIVE_LOG_EVENTS_FAIL,
  REQUEST_LOG_EVENTS
} from '../constants/logviewConstant';

const os = require('os');
const storage = require('electron-json-storage');

storage.setDataPath(os.tmpdir());

console.log(storage.get('credentials'));
storage.get('credentials', (error, data) => {
  if (error) throw error;
  console.log(data);
  AWS.config.update({
    region: 'us-east-1',
    secretAccessKey: data.secretkey,
    accessKeyId: data.accessKey
  });
});

export const requestLogEvents = createAction(REQUEST_LOG_EVENTS);
export const receiveLogEvents = createAction(RECEIVE_LOG_EVENTS);
export const receiveLogEventsFail = createAction(RECEIVE_LOG_EVENTS_FAIL);

export const fetchLogEvents = () => (dispatch, getState) => {
  const cloudwatchlogs = new AWS.CloudWatchLogs();
  dispatch(requestLogEvents());
  const params = {
    logGroupName: '/aws/codebuild/kqed-pipeline-api-image' /* required */,
    interleaved: true || false,
    limit: 50
  };
  cloudwatchlogs.filterLogEvents(params, (err, data) => {
    if (err) dispatch(receiveLogEventsFail());
    // an error occurred
    else dispatch(receiveLogEvents(data)); // successful response
  });
};
