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

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 450,
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

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Button variant="contained" size="small" className={classes.button}>
          貼圖</Button>
          <Button variant="contained" size="small" className={classes.button}>
          文字</Button>
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
        <Grid item xs={8}>
        <Card></Card>
        </Grid>
      <Grid item xs>
          <Paper className={classes.paper}>
          <Button variant="contained" size="small" className={classes.button}>
          頁面管理</Button></Paper>
          
        </Grid>

      <Grid item xs={9}>
        <Card className={classes.card} >
        </Card>
      </Grid>

       
        <Grid item xs>
          <Paper className={classes.paper}>
          <Button variant="contained" size="small" className={classes.button}>
          版型選擇</Button></Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
