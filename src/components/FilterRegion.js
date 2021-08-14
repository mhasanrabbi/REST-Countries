import React from 'react';
import { useGlobalContext } from '../context/GlobalState';
import Loading from './Loading';

const FilterRegion = () => {
  const {filterRegions, loading} = useGlobalContext();

  if (loading) {
    return <Loading/>
  }

  return (
    <select onChange={(e) => {
      filterRegions(e.target.value)
    }}
    aria-label="Filter Countries By Region"
    >
    <option value="All">Filter By Region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
    </select>
  )
}

export default FilterRegion;