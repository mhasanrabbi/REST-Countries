import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


function Header() {

  return (
      <Grid container 
      justifyContent="space-around"
      alignItems="center"
      className="header"
      >
          <Grid item>
            <h2>
              <Link to="/">
                Where in the world?
              </Link>
            </h2>
          </Grid>
          <Grid item>
            <button>Dark Mode</button>
          </Grid>
      </Grid>
  )
}

export default Header;