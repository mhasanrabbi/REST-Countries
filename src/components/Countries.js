import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { StateContext } from '../context/GlobalState';



const Countries = () => {
  const {items, setItems, loading} = useContext(StateContext)


  const removeCountry = (numericCode) => {
    const newCountry = items.filter((country) => country.numericCode !== numericCode)
    setItems(newCountry)
  }

  if (loading) return <Loading/>

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
            <div>
              <Link to={`/countries/${name}`}>
                Learn More
              </Link>
              <button onClick={() => removeCountry(numericCode)}>Remove Country</button>
            </div>
          </div>
          </article>
        )
      })}
    </div>
  )
}

export default Countries;