import { useState, useEffect } from "react";

function useCountry(countryName) {
  const url = `https://restcountries.com/rest/v3/name/${countryName}`;
  const [country, setCountry] = useState([]);
  const [error, setError] = useState("");
  if(error){
    console.log("Error; countries data could not be fetched", error)
  }
                                                            
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const country = await result.json();
        setCountry(country);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return (
      [error, country]
    )
}

export default useCountry;