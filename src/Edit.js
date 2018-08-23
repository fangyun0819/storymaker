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

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        
      <Grid item xs={2}>
          <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>頁面管理</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              放頁面管理的東西
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>版型選擇</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
             放版型選擇的東西
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>文字</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
             放文字的東西
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>貼圖</Typography>
          </ExpansionPanelSummary>
         <ExpansionPanelDetails>
            <Typography>
             放貼圖的東西
            </Typography>
         </ExpansionPanelDetails>
        </ExpansionPanel>
       </div>
          
      </Grid>
      <Grid item xs>
        <Grid item xs={12}>
          
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

          <Grid item xs>
          <Paper className={classes.paper}>
          編輯頁面
          </Paper>
          <Grid item xs>
          照片區
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
