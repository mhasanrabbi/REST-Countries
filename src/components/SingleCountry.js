import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../context/GlobalState';


const SingleCountry = () => {
  const {items} = useContext(StateContext)

  return (
    <div>
      <Link to="/">
        Back Home
      </Link>
      {/* {items.map((item) => {
          const {name, nativeName, numericCode, population, region, subregion, capital, currencies, languages, flag, borders} = item;
          return (
            <div key={numericCode}>
            {name}
            {nativeName}
            {population}
            {region}
            {subregion}
            {capital}
            {currencies}
            {languages}
            {flag}
            {borders}
            </div>
          )
        })
      }
      ) */}
    </div>
  )
}

export default SingleCountry;