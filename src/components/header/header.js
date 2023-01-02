import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import withStyles from 'material-ui/styles/withStyles';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/Menu/MenuItem';
import Menu from 'material-ui/Menu/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import LinearProgress from 'material-ui/Progress/LinearProgress';
import Search from '../search/search'
const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  flex2: {
    flex: 0.2,
  },
  flex3: {
    flex:0.3
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


export class HeaderComponent extends Component {
  state = {
    auth: true,
    anchorEl: null,
  };
  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit" className={classes.flex2}>
              Aayushyagathi
            </Typography>
            {this.props.loggedInUser &&
              <Search styleClass={classes.flex3} />
            }
            <div></div>
            {this.props.loggedInUser &&
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            }
          </Toolbar>
        </AppBar>
        {/* <LinearProgress /> */}
      </div>
    )
  }
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
const headerWithStyles = withStyles(styles)(HeaderComponent);

function mapStateToProps(state) {
  console.log('state', state)
  return {
    loggedInUser: state.loggedInUser,
    userProfile: state.userProfile
  };
}

export const Header = connect(mapStateToProps)(headerWithStyles);


