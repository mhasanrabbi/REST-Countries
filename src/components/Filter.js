import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import { useGlobalContext } from '../context/CountryContext';

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
  const {filterRegions} = useGlobalContext();

  return (
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