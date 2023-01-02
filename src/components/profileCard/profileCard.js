import React, { Component } from 'react';
import Card from 'material-ui/Card/Card';
import CardMedia from 'material-ui/Card/CardMedia';
import CardContent from 'material-ui/Card/CardContent';
import Typography from 'material-ui/Typography/Typography';
import Button from 'material-ui/Button/Button';
import CardActions from 'material-ui/Card/CardActions';
import withStyles from 'material-ui/styles/withStyles';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid/Grid';
import Profile from '../profile/profile';

const styles = {
  card: {
    cursor: 'pointer'
  },
  media: {
    height: 200,
  },
};

class ProfileCard extends Component {
  state = {
    open: false
  }
  openProfile() {
    this.setState({ open: true });
  }
  closePopup() {
    this.setState({ open: false });
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid item md={3}>
        <Card className={classes.card} onClick={this.openProfile.bind(this)}>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile" />
          <CardContent>
            <Typography type="headline" component="h2">
              Lizard
          </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          </CardContent>
          <CardActions>
            <Button dense color="primary">Share</Button>
            <Button dense color="primary">Learn More</Button>
          </CardActions>
        </Card>
        <Profile open={this.state.open} close={this.closePopup.bind(this)} />
      </Grid>
    )
  }
}

const profileCardWithStyle = withStyles(styles)(ProfileCard);

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
    userProfile: state.userProfile
  };
}

export default connect(mapStateToProps)(profileCardWithStyle);
