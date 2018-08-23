import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';

import Template from './component/Template';
import Editbar from './component/Editbar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 500,
  },
  card: {
    display: 'flex',
    height: 450,
    width: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
  },

  

});

class CenteredGrid extends React.Component {
  state = {
    expanded: null,
  };

  render() {
    const { classes } = this.props;
    
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
       
       <Grid item xs={2}>
       <Editbar/>
      </Grid>
    
      <Grid item xs>
        <Grid item xs>
          <IconButton className={classes.button} aria-label="Delete">
          <UndoIcon/>
          </IconButton>
          <IconButton className={classes.button} aria-label="Delete">
          <RedoIcon/>
          </IconButton>
          <Button variant="outlined" color="primary" className={classes.button}>
          預覽
          </Button>
        </Grid>

        <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Template/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          編輯頁面</Paper>
        </Grid>
        </Grid>
       </Grid>
     </Grid>
    </div>
  );
}
}
CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
