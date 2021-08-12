import axios from 'axios';
import { useEffect, useState } from 'react';

const API_ENDPOINT = `https://restcountries.eu/rest/v2`

const useFetch = (urlParams) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({show:false,msg:''});

  const fetchData = async (url) => {
    setLoading(true)
    try {
      const response = await axios.get(url);
      console.log(data)
      setData(response.data);
      
      if (data === "True") {
        setData(data)
        setError({show:false,msg:''})
      } else {
        setError({show:true,msg:'Does not match any country name'})
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  // fetching api data
  useEffect(() => {
    fetchData(`${API_ENDPOINT}${urlParams}`);
  },[urlParams])
  
  return { loading, error, data}

}

export default useFetch;