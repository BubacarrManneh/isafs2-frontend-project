import {useState, useEffect} from 'react'


const useCountry = (countryName) => {
    const [countryData, setCountryData] = useState([])
    const [error, setError] = useState([])
    const url = `https://restcountries.com/v3.1/name/${countryName}`
    useEffect(() => {
      const getCountry = async () => {
        try{
          const response = await fetch(url)
          const data = await response.json()
          setCountryData(data)
        }catch(error){
          setError(error)
        }
        
      }
      getCountry()
    }, [url])
    return (
        {error, countryData}
    )
}

export default useCountry
