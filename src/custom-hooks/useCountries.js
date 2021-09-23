import { useState, useEffect } from "react";

const useCountries = url => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const finalResult = await result.json();
        setData(finalResult);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return [data, error];
};

export default useCountries;