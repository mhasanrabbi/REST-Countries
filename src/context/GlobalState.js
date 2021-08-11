import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

// creating context
const StateContext = createContext();

function StateProvider({children}) {
  // defining state for country
  const [items, setItems] = useState([]);
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);



  // fetching country data
  useEffect(() => {
    getData();
  },[])

  async function getData() {
    try {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      console.log(response.data)
      setItems(response.data);
      setCountry(response.data.name);
      setLoading(false);
    } catch (error) {
      console.error(error.message)
    }
  }



  return (
    <StateContext.Provider value={{items, setItems, country, setCountry, loading }}>
      {children}
    </StateContext.Provider>
  )
}

export { StateContext, StateProvider };
