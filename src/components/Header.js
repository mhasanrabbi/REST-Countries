import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const getStorageTheme = () => {
  let theme = 'light-theme'
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme;
}

function Header() {
const [theme, setTheme] = useState(getStorageTheme())

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
  localStorage.setItem('theme', theme)
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