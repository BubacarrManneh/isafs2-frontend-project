
// import {Param} from 'react-router-dom'
import React from 'react'
import Navbar from '../components/Navebar'

import CountriesTable from '../Table/CountriesTable'

const Home = () => {
  return (
    <div>
      {<Navbar />}
      {<CountriesTable />}
    </div>
	)
}
 
export default Home;