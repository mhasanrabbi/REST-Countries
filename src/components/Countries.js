import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context/GlobalState';

const Countries = () => {
  const { loading, searchResults} = useGlobalContext();
  
  if (loading) {
    return <Loading/>
  }

  return (
    <Container>
      <Grid container spacing={4} className="card-grid">
        {searchResults.map((country) => {
          const {name, population, region, capital, flag, numericCode, col} = country
          return (
          <Grid item key={numericCode} xs={6} sm={4} md={3} lg={3}>
            <Card>
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
                  Population: {population.toLocaleString()}
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
  </Container>
  )
}
export default Countries;