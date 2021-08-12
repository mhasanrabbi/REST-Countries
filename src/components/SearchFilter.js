import React from 'react';
import { useGlobalContext } from '../context/GlobalState';

const SearchFilter = () => {
  const {query, setQuery, error} = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Search</h2>
      <input type="text" value={query} onChange={(e) =>setQuery(e.target.value)}></input>
      {/* {error.show && <div>
        {error.msg}
      </div>} */}
    </form>
  )
}

export default SearchFilter;