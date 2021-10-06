
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navebar'

import CountriesTable from '../Table/CountriesTable'


const Home = () => {
  const countryName = useParams();
  return (
    <div>
      {<Navbar />}
      <Link to={`countries/${countryName}`}>Country Page</Link>
      {<CountriesTable />}
    </div>
	)
}
 
export default Home;