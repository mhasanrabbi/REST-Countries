import React, { useContext } from 'react';
import { StateContext } from '../context/GlobalState';


const Countries = () => {
  const {items} = useContext(StateContext)

  return (
    <div>
      {items.map((country) => {
        const {name, population, region, capital, flag, numericCode} = country
        return (
          <article key={numericCode}>
          <div>
            <img src={flag} alt={name}/>
            <h3>{name}</h3>
            <h4>{population}</h4>
            <h4>{region}</h4>
            <h4>{capital}</h4>
          </div>
          </article>
        )
      })}
    </div>
  )
}

export default Countries;