import React from 'react'

const Home = ({numericCode, flag, name, capital, region}) => {
    return ( 
     
        <><h1>Home Page</h1><article className="Home" key={numericCode}>
            <div>
                <img src={flag} alt={flag} />{flag}
                <h3>Name: {name}</h3>
                <p>Capital: {capital} </p>
                <p>Region: {region}</p>
            </div>
        </article></>
        
     );
}
 
export default Home;