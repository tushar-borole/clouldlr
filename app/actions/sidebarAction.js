// @flow
import { createAction } from 'redux-actions'
import AWS from 'aws-sdk'
import { RECEIVE_LOG_GROUPS , RECEIVE_LOG_GROUPS_FAIL , REQUEST_LOG_GROUPS } from '../constants/sidebarConstant'



const cloudwatchlogs = new AWS.CloudWatchLogs();


export const requestLogGroups = createAction(REQUEST_LOG_GROUPS)
export const receiveLogGroups = createAction(RECEIVE_LOG_GROUPS)
export const receiveLogGroupsFail = createAction(RECEIVE_LOG_GROUPS_FAIL)


export const fetchLogGroups =() => (dispatch, getState) => {
  dispatch(requestLogGroups())
  const params = {
    limit: 10
  };
  cloudwatchlogs.describeLogGroups(params, (err, data) => {
    if (err) dispatch(receiveLogGroupsFail()); // an error occurred
    else     dispatch(receiveLogGroups(data));          // successful response
  });



};
