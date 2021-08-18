import React from "react";
import FilterRegion from "./Filter";
import SearchForm from "./Search";

const SearchFilterBox = () => {
  return (
    <div className="searchFilterBox">
      <SearchForm/>
      <FilterRegion/>
    </div>
  )
}

export default SearchFilterBox;