import React from 'react'
import useCountries from './custom-hooks/useCountries'
// import {useState, useEffect} from 'react'

const Home = () => {
    const[allCountries, error] = useCountries('"http://restcountries.eu/rest/v2/all"');
    if(error){
    console.log("Error; countries data could not be fetched", error)
  }
    return ( 
        <div>
            {allCountries.map((country) => {
                    return <Home key={country.name} flag={country.flag} capital={country.capital} region={country.region} language={country.language}  />
                    })
            }
        </div>
     );
}
 
export default Home;