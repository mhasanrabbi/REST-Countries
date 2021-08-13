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
    <div >
      <Link to="/">
        Back Home
      </Link>
      {
        country.map(({name, capital, numericCode }) => {
          return (
            <div key={numericCode}>
            <h3>{name}</h3>
            <h3>{capital}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default SingleCountry;