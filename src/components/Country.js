
import React from 'react'

const Country = ({flag, name, capital,region, languages}) => {
    return ( 
        <div>
            <h1>Country Page</h1>
            <img src={flag} alt={flag} />
            <h2>Name: {name}</h2>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Language: {languages}</p>
        </div>
     );
}
 
export default Country;