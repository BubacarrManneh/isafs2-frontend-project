
import React from 'react'
import useCountry from '../custom-hooks/useCountry'
// import {useState, useEffect} from 'react'

const Country = (countryName) => {
    const[oneCountry, error] = useCountry('http://restcountries.com/rest/v3/name/{countryName}');
    if(error){
    console.log("Error; countries data could not be fetched", error)
  }
    return ( 
        <div>
            {oneCountry.filter((country) => {
               return  country.name === 'oneCountry'
                }).map(country => {
                    return <Country key={country.name} flag={country.flag} capital={country.capital} region={country.region} language={country.language}  />
                })
             }
        </div>
    )  
       
}
 
export default Country;