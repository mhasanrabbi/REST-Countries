import { Button, Grid } from '@material-ui/core';
import { Brightness3, WbSunny } from '@material-ui/icons';
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

const icon = 
theme === "light-theme" ? <Brightness3/> : <WbSunny/>;
const themeText = 
theme === "light-theme" ? " Dark Mode" : " Light Mode"

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
            <Button onClick={toggleTheme}>
              {icon} { themeText}
            </Button>
          </Grid>
      </Grid>
  )
}

export default Header;