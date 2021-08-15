import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import { useGlobalContext } from '../context/GlobalState';
import Loading from './Loading';

const region = [
  {
    value: 'All',
    label: 'Filter by Region',
  },
  {
    value: 'Africa',
    label: 'Africa',
  },
  {
    value: 'Americas',
    label: 'Americas',
  },
  {
    value: 'Asia',
    label: 'Asia',
  },
  {
    value: 'Europe',
    label: 'Europe',
  },
  {
    value: 'Oceania',
    label: 'Oceania',
  },
];

const FilterRegion = () => {
  const {filterRegions, loading, regions} = useGlobalContext();

  if (loading) {
    return <Loading/>
  }

  return (
    // <select onChange={(e) => {
    //   filterRegions(e.target.value)
    // }}
    // aria-label="Filter Countries By Region"
    // >
    // <option value="All">Filter By Region</option>
    // <option value="Africa">Africa</option>
    // <option value="Americas">America</option>
    // <option value="Asia">Asia</option>
    // <option value="Europe">Europe</option>
    // <option value="Oceania">Oceania</option>
    // </select>
    <TextField
        select
        className = "select"
        value={region.label}
        onSubmit = {e => e.preventDefault()}
        onChange={(e) => {filterRegions(e.target.value)}}
        helperText="Select Region"
        >
        {region.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>
  )
}

export default FilterRegion;