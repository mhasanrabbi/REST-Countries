import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context/GlobalState';



const Countries = () => {
  const {countries, loading} = useGlobalContext();


  if (loading) {
    return <Loading/>
  }

  return (
    <div>
      {countries.map((country) => {
        const {name, population, region, capital, flag, numericCode} = country
        return (
        <Link to={`/countries/${name}`}>
          <article key={numericCode}>
          <div>
            <img src={flag} alt={name}/>
            <h3>{name}</h3>
            <h4>{population}</h4>
            <h4>{region}</h4>
            <h4>{capital}</h4>
          </div>
          </article>
        </Link>
        )
      })}
    </div>
  )
}

export default Countries;