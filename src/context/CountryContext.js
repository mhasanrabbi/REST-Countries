import React, { createContext, useContext, useEffect, useState } from 'react';
import useFetch from '../components/useFetch';

// creating context
const StateContext = createContext();

function StateProvider({children}) {
  // defining state for country
  const [query, setQuery] = useState('/all');
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [regions, setRegions] = useState([]);
  const {loading, error, data:countries} = useFetch(`${query}`);
 
  useEffect(() => {
    filterRegions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const filterRegions = (region) => {
    if (region === "All") {
      setSearchResults(countries);
      return;
    }
  
  const newRegion = countries.filter((country) => country.region === region);
  setSearchResults(newRegion);
  }
    
  useEffect(() => {
    setSearchResults (
       countries.filter(country => {
        return country.name.toLowerCase().includes( searchTerm.toLowerCase())
      })
      )
    }, [searchTerm, countries])

    return (
      <StateContext.Provider value={{countries, loading, error, query, setQuery, searchTerm, setSearchTerm, searchResults, setSearchResults, regions, setRegions, filterRegions }}>
        {children}
      </StateContext.Provider>
    )
  }

export const useGlobalContext = () => {
  return useContext(StateContext)
}

export { StateContext, StateProvider };
