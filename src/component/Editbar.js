import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: 'auto',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: 'auto',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
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
     );
    }
  }
  
  ControlledExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ControlledExpansionPanels);