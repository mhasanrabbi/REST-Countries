import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
const [theme, setTheme] = useState('light-theme')

const toggleTheme = () => {
  if (theme === 'light-theme') {
    setTheme('dark-theme')
  }
 else {
  setTheme('light-theme')
}
}

useEffect(() => {
  document.documentElement.className = theme
}, [theme])

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
            <button onClick={toggleTheme}>Dark Mode</button>
          </Grid>
      </Grid>
  )
}

export default Header;