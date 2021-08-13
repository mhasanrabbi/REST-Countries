// import React, { useEffect } from 'react';
// import { useGlobalContext } from '../context/GlobalState';

// const SearchFilter = () => {

//   // const [searchResults, setSearchResults] = useState([]);
//   const {countries, loading, searchTerm, setSearchTerm, searchResults, setSearchResults} = useGlobalContext();

//   // const inputEl = useRef("");
//   // useEffect(() => {
//   //   const results = countries.filter(country => 
//   //     country.toString().toLowerCase().includes(searchTerm)
//   //     );
//   //     setSearchTerm(results);
//   // },[]);

//   // const handleOnChange = () => {
//   //   return searchHandler(inputEl.current.value);
//   // }
//   useEffect(() => {
//     setSearchResults (
//        countries.filter(country => {
//         return country.name.toLowerCase().includes( searchTerm.toLowerCase())
//       })

//     )
//   }, [searchTerm, countries])
  

//   return (
//     <div>

//     {/* <form 
//     onSubmit={(e) => e.preventDefault()}> */}
//       <h2>Search</h2>
//       <input type="text" onChange={ e => setSearchTerm(e.target.value)}></input>
//       {searchResults.map((country) => {
//         const {name, population, region, capital, flag, numericCode} = country
//         return (
//           <article key={numericCode}>
//           <div>
//             <img src={flag} alt={name}/>
//             <h3>{name}</h3>
//             <h4>{population}</h4>
//             <h4>{region}</h4>
//             <h4>{capital}</h4>
//           </div>
//           </article>
//         )
//       })}
//     </div>
//   )
// }

// export default SearchFilter;