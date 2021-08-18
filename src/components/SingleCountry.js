import { Box, Container } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Loading from './Loading';
import useFetch from './useFetch';


const SingleCountry = () => {
  let history = useHistory();
  const { name } = useParams()
  const { loading, error, data: country } = useFetch(`/name/${name}`)

 
  if(loading) {
    return <Loading/>
  }

  const goBack = () => {
    history.push("/")
  }
  
  return (
     <Container>
      <Box className="row back-btn">
          <button className="btn" onClick={goBack}><ArrowBack/></button>
      </Box>
      {country.map(({name, nativeName, capital, flag, col, numericCode,population,region,subregion,currencies,languages,topLevelDomain,borders,alpha3code }) => {
          return (
            <Box key={numericCode}
              className="row row-container">
            <Box className="col img-col">
              <img src={flag} alt={col} className="flag-img"/>
            </Box>
            <Box className="description">
            <Box className="row">
              <Box className="col">
                <h2>{name}</h2>
              </Box>
            </Box>
              <Box className="row content-desc">
                <Box className="col first-col">
                  <p><span>Native Name:</span> {nativeName}</p>
                  <p><span>Population:</span> {population.toLocaleString()}</p>
                  <p><span>Region:</span> {region}</p>
                  <p><span>Sub Region:</span> {subregion}</p>
                  <p><span>Capital:</span> {capital}</p>
                </Box>
  
                <Box className="col second-col">
                  <p><span>Top Level Domain:</span> {topLevelDomain}</p>
                  <p><span>Currencies:</span> {currencies.map(currency => `${currency.name} (${currency.symbol})`)}</p>
                  <p><span>Languages:</span> {languages.map(language => language.name).join(', ')}</p>
                </Box>
              </Box>
                <Box className="row">
                  <Box className="col third-col">
                  <p><span>Border Countries: </span> 
                  {borders.map((border, index) => {
                    return (
                       <Link to={`/countries/${border.alpha3code}`}>
                      <button className="btn" key={index}>{border}</button>
                       </Link>
                       )
                     }
                  )}
                  </p>
                </Box>
                </Box>
            </Box>
          </Box>
          )
        })
      }
    </Container>
  )
}

export default SingleCountry;