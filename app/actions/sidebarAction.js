// @flow
import { createAction } from 'redux-actions';
import AWS from 'aws-sdk';
import {
  RECEIVE_LOG_GROUPS,
  RECEIVE_LOG_GROUPS_FAIL,
  REQUEST_LOG_GROUPS
} from '../constants/sidebarConstant';

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

export const requestLogGroups = createAction(REQUEST_LOG_GROUPS);
export const receiveLogGroups = createAction(RECEIVE_LOG_GROUPS);
export const receiveLogGroupsFail = createAction(RECEIVE_LOG_GROUPS_FAIL);

export const fetchLogGroups = () => (dispatch, getState) => {
  const cloudwatchlogs = new AWS.CloudWatchLogs();
  dispatch(requestLogGroups());
  const params = {
    limit: 10
  };
  cloudwatchlogs.describeLogGroups(params, (err, data) => {
    if (err) dispatch(receiveLogGroupsFail());
    // an error occurred
    else dispatch(receiveLogGroups(data)); // successful response
  });
};
