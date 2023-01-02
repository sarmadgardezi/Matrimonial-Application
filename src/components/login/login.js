import React, { Component } from 'react';
import { Grid, Paper } from 'material-ui'
import withStyles from 'material-ui/styles/withStyles';
import Button from 'material-ui/Button/Button';
import { Face } from 'material-ui-icons';

import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 10
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class LoginComponent extends Component {

  loginUser() {
    this.props.dispatch({
      type: 'SET_LOGGEDIN_USER',
      loggedInUser: '123'
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" direction="column" alignItems="center">
        <Grid item md={4}>
          <Paper className={classes.paper} >
            <Button raised fullWidth className={classes.button} color="secondary" onClick={() => this.loginUser()}>
              Login using Google
            </Button>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper className={classes.paper} >
            <Button raised fullWidth className={classes.button} color="primary">
              Login using Facebook
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const loginWithStyle = withStyles(styles)(LoginComponent);

function mapStateToProps(state) {
  console.log('state', state)
  return {
    loggedInUser: state.loggedInUser,
    userProfile: state.userProfile
  };
}

export const Login = connect(mapStateToProps)(loginWithStyle);
