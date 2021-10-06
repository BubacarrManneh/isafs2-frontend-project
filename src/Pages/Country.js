// import {useParams} from 'react-router-dom'
import useCountry from '../custom-hooks/useCountry'

const Country = (countryName) => {

    const {country, error} = useCountry(`https://restcountries.com/v2/name${countryName}`)
  console.log('Name:', country)

  if (error) {
    return <p>Sorry, there is an error while fetching data to the table</p>;
  }
 
    return ( <div>
            {country}
        </div>
  )
}
 
export default Country;