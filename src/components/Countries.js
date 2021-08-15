import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context/GlobalState';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
  }
});

const Countries = () => {
  const { loading, searchResults} = useGlobalContext();
  const classes = useStyles();
  
  if (loading) {
    return <Loading/>
  }

  return (
    <Grid container spacing={3}>
      {searchResults.map((country) => {
        const {name, population, region, capital, flag, numericCode, col} = country
        return (
        <Grid item key={numericCode} xs={12} sm={6} md={4} lg={3}>
        <Card >
          <Link to={`/countries/${name}` }>
        <CardActionArea>
          <CardMedia
          component="img"
          alt={col}
          height="150"
          image={flag}
          title={name}
          />
        <CardContent>
          <Typography component="h3">
            {name}
          </Typography>
          <Typography component="p">
            Population: {population}
          </Typography>
          <Typography component="p">
            Region: {region}
          </Typography>
          <Typography component="p">
            Capital: {capital}
          </Typography>
        </CardContent>
        </CardActionArea>
        </Link>
        </Card>
        </Grid>
        )
      })}
    </Grid>
  )
}
export default Countries;