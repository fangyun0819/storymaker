import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    width: 500,
  },
};



class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };
  

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;


  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
        <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Word of the Day
          </Typography>
          <Typography variant="headline" component="h2">
           你好嗎
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}>

        <BottomNavigationAction label="畢業風" />
        <BottomNavigationAction label="海洋風" />
    
      </BottomNavigation>
    
     <Button variant="contained" component="span" className={classes.button}>
         下一步
        </Button>
        </CardActions>
        </Card>
         
        </Grid>
        </Grid>
      

 <Grid container spacing={24}>
      <Grid Item xs>
          <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" gutterBottom>
            放模板
            <div>
            海洋風
            </div>
          </Typography>
        </CardContent>
        </Card>
          </Grid>
          <Grid Item xs>
          <Card className={classes.card}>
        <CardContent>
        <Typography variant="headline" gutterBottom>
            放模板
            <div>
            畢業風
            </div>
          </Typography>
        </CardContent>
        </Card>
          </Grid>
          <Grid Item xs>
          <Card className={classes.card}>
        <CardContent>
        <Button variant="contained" component="span" className={classes.button}>
         下一步
        </Button>
        </CardContent>
        </Card>
        </Grid>
        
      </Grid>

    
    </div>
  );
}
}
SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleBottomNavigation);
