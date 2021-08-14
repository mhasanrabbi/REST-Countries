import React from "react";
import FilterRegion from "./FilterRegion";
import SearchForm from "./SearchFilter";

const SearchFilterBox = () => {
  return (
    <div className="searchFilter">
        <SearchForm/>
        <FilterRegion/>
      </div>
  )
}

export default SearchFilterBox;