import React, { createContext, useContext, useEffect, useState } from 'react';
import useFetch from '../components/useFetch';

// creating context
const StateContext = createContext();

function StateProvider({children}) {
  // defining state for country
  const [query, setQuery] = useState('/all');
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [region, setRegion] = useState([]);
  const {loading, error, data:countries} = useFetch(`${query}`);

  // const searchHandler = (searchTerm) => {
  //   setSearchTerm(searchTerm);
  //   if (searchTerm !== "") {
  //     const newCountryList = countries.filter((country) => {
  //       return Object.values(country)
  //         .join(" ")
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase());
  //     });
  //     setSearchResults(newCountryList);
  //     console.log(newCountryList);
  //   } else {
  //     setSearchResults(countries);
  //   }
  // };

  useEffect(() => {
    setSearchResults (
       countries.filter(country => {
        return country.name.toLowerCase().includes( searchTerm.toLowerCase())
      })
      )
  }, [searchTerm, countries])

  const filterRegions = (region) => {
    if ( region === "All") {
      setSearchResults(query)
    }
    const newRegion = countries.filter((country) => country.region === region);
    setSearchResults(newRegion);
  }

    return (
      <StateContext.Provider value={{countries, loading, error, query, setQuery, searchTerm, setSearchTerm, searchResults, setSearchResults, region, setRegion, filterRegions }}>
        {children}
      </StateContext.Provider>
    )
  }

export const useGlobalContext = () => {
  return useContext(StateContext)
}

export { StateContext, StateProvider };
