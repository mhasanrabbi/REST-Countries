import { Card, CardActionArea, CardContent, CardMedia, Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context/CountryContext';

const Countries = () => {
  const { loading, searchResults} = useGlobalContext();
  
  if (loading) {
    return <Loading/>
  }

  return (
    <Container>
      <Grid container spacing={4}>
        {searchResults.map((country) => {
          const {name, population, region, capital, flag, col} = country
          return (
          <Grid item key={uuidv4()} xs={6} sm={4} md={3} lg={3}>
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
              <CardContent className="card-content">
                <h3>
                  {name}
                </h3>
                <p>
                  Population: <span className="info-text">{population.toLocaleString()}</span>
                </p>
                <p>
                  Region: <span className="info-text">{region}</span>
                </p>
                <p>
                  Capital: <span className="info-text">{capital}</span>
                </p>
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