import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

function HeaderContent() {
  return (
      <AppBar position="sticky">
        <Toolbar>
        <Typography variant="h1">Where in the world?</Typography>
        <button>Dark Mode</button>
        </Toolbar>
      </AppBar>
  )
}

export default HeaderContent;