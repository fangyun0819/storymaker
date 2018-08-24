import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import ProgressPhoto from './ProgressPhoto';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 500,
  },
  card: {
    display: 'auto',
    height: 200,
    width: 200,
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Typography variant="title">
      從我的電腦上傳
      </Typography>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        
      />
      <label htmlFor="contained-button-file">
      <Button variant="outlined" component="span" className={classes.button}>
        上傳照片
        </Button>
      </label>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Grid item xs={6} sm={3}>
        <Card className={classes.card}>
        <br/>
        <ProgressPhoto/>
        </Card>
        </Grid>
          </Paper>
        </Grid>
        </Grid>


    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
