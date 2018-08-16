import React from 'react';
import Grid from '@material-ui/core/Grid';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
  paper: {padding: 50, marginTop:50, marginBotton:50}
  }


  export default props =>
      <Grid container>
        <Grid item sm>
          <LeftPane styles={styles}/>
        </Grid>
        <Grid item sm>
          <RightPane styles={styles}/>
        </Grid>
      </Grid>
      