import {useParams} from 'react-router-dom'
import useCountry from '../custom-hooks/useCountry'

const Country = () => {
  const {countryName} = useParams()
    const {countryData, error} = useCountry(countryName)
  console.log('Name:', countryName)

  if (error) {
    return <p>Sorry, there is an error while fetching data to the table</p>;
  }
  return (
    <div>
         {countryData}
    </div>
	)
}
 
export default Country;