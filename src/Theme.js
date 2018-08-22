import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
         <Grid container>
         <Grid item xs={100} md={6}>
         <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        </Grid>

         <Grid item xs={100} md={6}>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
        <Button variant="contained" size="small" className={classes.button}>下一步</Button>
        </Grid>
        </Grid>
      </Paper>
     
    
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);