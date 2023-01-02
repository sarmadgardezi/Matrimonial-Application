import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui'
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import ProfileCard from '../profileCard/profileCard';
import Grid from 'material-ui/Grid/Grid';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  lightGray: {
    background: 'rgba(0,0,0,0.2)'
  }
});

class HomeComponent extends Component {
  state = {
    expanded: 1,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const params = new URLSearchParams(this.props.location.search)
    const queryParams = Array.from(params).map(([key, value]) => ({ [key]: value }));

    const { classes } = this.props;
    const { expanded } = this.state;
    const SEARCH_RESULT = 0;
    const FAVOURITE_LIST = 1;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === FAVOURITE_LIST} onChange={this.handleChange(FAVOURITE_LIST)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Favourite Profiles</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.lightGray}>
            <Grid container>
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === SEARCH_RESULT} onChange={this.handleChange(SEARCH_RESULT)}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Search Result</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.lightGray}>
            <Grid container>
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

const homeWithStyle = withStyles(styles)(HomeComponent);

function mapStateToProps(state) {
  console.log('state', state)
  return {
    loggedInUser: state.loggedInUser,
    userProfile: state.userProfile
  };
}

export const Home = connect(mapStateToProps)(homeWithStyle);
