import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

// creating context
const StateContext = createContext();

function StateProvider({children}) {
  // defining state for country
  const [items, setItems] = useState([]);

  // fetching country data
  useEffect(() => {
    getData();
  },[])

  async function getData() {
    try {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      console.log(response.data)
      setItems(response.data);
    } catch (error) {
      console.error(error.message)
    }
  }

  return(
    <StateContext.Provider value={{items}}>
      {children}
    </StateContext.Provider>
  )
}

export { StateContext, StateProvider };
