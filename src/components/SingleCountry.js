import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import useFetch from './useFetch';




const SingleCountry = () => {
  const { name } = useParams()
  const { loading, error, data: country } = useFetch(`/name/${name}`)

  if(loading) {
    return <Loading/>
  }

  
  return (
     <Box>
      <span className="back-home-link">
        <Link to="/">
          Back Home
        </Link>
      </span>
      {
        country.map(({name, nativeName, capital, flag, col, numericCode,population,region,subregion,currencies,languages,topLevelDomain,borders }) => {
          return (
            <Box container key={numericCode}
              className="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <img src={flag} alt={col} className="flag-img"/>
            <Box>

              <Box className="row"
                justifyContent="space-between"
              >
                <Box className="col">
                <Typography variant="h3">{name}</Typography>
                <Typography>Native Name: {nativeName}</Typography>
                <Typography>Population: {population}</Typography>
                <Typography>Region: {region}</Typography>
                <Typography>Sub Region: {subregion}</Typography>
                <Typography>Capital: {capital}</Typography>
                </Box>
  
              <Box className="col">
                <Typography>Top Level Domain: {topLevelDomain}</Typography>
                <Typography>Currencies: {currencies[0].name}</Typography>
                <Typography>Languages: {languages[0].name}</Typography>
              </Box>
            
              </Box>
                <Box className="row">

                <Box className="col">
                  <Typography>Border Countries: 
                  {borders.map((border, index) => 
                     (
                      <span key={index}> {border} </span>
                    )
                  )}
                  </Typography>
                </Box>
                </Box>
            </Box>
          </Box>

          )
        })
      }
    </Box>
  )
  
}

export default SingleCountry;