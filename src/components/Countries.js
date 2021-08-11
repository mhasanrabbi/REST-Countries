import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    getData();

  },[])

  async function getData() {
    try {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      console.log(response.data)
      setCountries(response.data);
    } catch (error) {
      console.error(error.message)
    }
  }


  return (
    <div>
      {countries.map((country) => {
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