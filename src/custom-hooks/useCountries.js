import {useState, useEffect} from 'react'

const useCountries = (url) => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        setCountries(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);
  
  return (
    {error, countries}
  )
}

export default useCountries
