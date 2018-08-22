import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
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
        <Typography variant="headline" gutterBottom>
            放模板
            <div>
            其他
            </div>
          </Typography>
        </CardContent>
        </Card>
        </Grid>
       
      </Grid>

     
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);
