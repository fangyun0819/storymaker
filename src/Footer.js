import React from 'react';
import Theme from './Theme';
import PropTypes from 'prop-types';


import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonAuto extends React.Component {
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
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="成員列表" />
            <Tab label="選擇照片" />
            <Tab label="照片匯集" />
            <Tab label="主題選擇" />
            <Tab label="編輯頁面" />
            
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>成員列表</TabContainer>}
        {value === 1 && <TabContainer>選擇照片</TabContainer>}
        {value === 2 && <TabContainer>照片匯集</TabContainer>}
        {value === 3 && <TabContainer><Theme/></TabContainer>}
        {value === 4 && <TabContainer>編輯頁面</TabContainer>}
       
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);