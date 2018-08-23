import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

  card: {
    display: 'flex',
    height: 200,
    width: 200,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <React.Fragment>
      <Paper className={classes.root} elevation={1}>
         <Grid container xs={24}>
         <Grid item xs={6} sm={3}>
         <Typography variant="headline" component="h3">
          主題選擇
        </Typography>
        </Grid>
        </Grid>
      <Grid item container xs={24}>
        <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
         <CardContent>

         <Button variant="contained" size="small" className={classes.button}>
         畢業風</Button>
        </CardContent>
        

        </Card>
        
        </Grid>
      </Grid>
      </Paper>
    </React.Fragment>
    
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);