import React from "react";
import { useGlobalContext } from '../context/GlobalState';
import Loading from "./Loading";

const SearchForm = () => {

  const { loading,  setSearchTerm, setFilterParam} = useGlobalContext();

  if (loading) {
    return <Loading/>
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input type="text" onChange={ e => setSearchTerm(e.target.value)}></input>
      <div>
        
      </div>
    </form>
  )
}

export default SearchForm;
