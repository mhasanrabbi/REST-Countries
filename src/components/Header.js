import { Grid } from '@material-ui/core';
import React from 'react';

function Header() {
  return (
      <Grid container 
      justifyContent="space-around"
      alignItems="center"
      className="header"
      >
          <Grid item>
            <h2>Where in the world?</h2>
          </Grid>
          <Grid item>
            <button>Dark Mode</button>
          </Grid>
      </Grid>
  )
}

export default Header;