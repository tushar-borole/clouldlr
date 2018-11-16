import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import { NotificationContainer } from 'react-notifications';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import { history } from '../../store/configureStore';

const os = require('os');
const storage = require('electron-json-storage');

storage.setDataPath(os.tmpdir());

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignIn extends Component {
  state = {
    region: ''
  };

  componentDidMount() {
    // NotificationManager.info('Info message','ASDASD',200000);
  }

  handleChange = event => {
    this.setState({ region: event.target.value });
  };

  saveCrendentials() {
    const { region } = this.state;
    storage.set(
      'credentials',
      {
        accessKey: this.accesskey.value,
        secretkey: this.secretkey.value,
        region
      },
      error => {
        if (error) throw error;
        history.push('/home');
      }
    );
  }

  render() {
    const { classes } = this.props;
    const { region } = this.state;
    const regions = [
      'us-west-2',
      'us-west-1',
      'us-east-2',
      'us-east-1',
      'ap-south-1',
      'ap-northeast-2',
      'ap-southeast-1',
      'ap-southeast-2',
      'ap-northeast-1',
      'ca-central-1',
      'cn-north-1',
      'eu-central-1',
      'eu-west-1',
      'eu-west-2',
      'eu-west-3',
      'sa-east-1',
      'us-gov-west-1'
    ];
    return (
      <React.Fragment>
        <CssBaseline />
        <NotificationContainer />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form}>
              <FormControl required fullWidth>
                <InputLabel htmlFor="region">Region</InputLabel>
                <Select
                  id="region"
                  name="region"
                  onChange={this.handleChange}
                  value={region}
                  inputRef={e => {
                    this.region = e;
                  }}
                >
                  {regions.map(value => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="accesskey">Access Key</InputLabel>
                <Input
                  id="accesskey"
                  name="accesskey"
                  inputRef={e => {
                    this.accesskey = e;
                  }}
                  autoComplete="accesskey"
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="secretkey">Secret Access Key</InputLabel>
                <Input
                  name="secretkey"
                  id="secretkey"
                  autoComplete="secretkey"
                  inputRef={e => {
                    this.secretkey = e;
                  }}
                />
              </FormControl>
              <Button
                onClick={this.saveCrendentials.bind(this)}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign in
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withStyles(styles)(SignIn);
