import React, { createContext, useContext, useState } from 'react';
import useFetch from '../components/useFetch';

// API endpoint

// creating context
const StateContext = createContext();

function StateProvider({children}) {
  // defining state for country
  const [query, setQuery] = useState('');
  const {loading, error, data:countries} = useFetch(`${query}`)

  

    return (
      <StateContext.Provider value={{countries, loading, error, query, setQuery }}>
        {children}
      </StateContext.Provider>
    )
  }





export const useGlobalContext = () => {
  return useContext(StateContext)
}

export { StateContext, StateProvider };
