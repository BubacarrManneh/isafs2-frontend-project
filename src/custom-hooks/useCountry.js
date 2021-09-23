import { useState, useEffect } from "react";

function UseCountry(countryName) {
  const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const data = await result.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return [data, error];
}

export default UseCountry;