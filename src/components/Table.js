import React from 'react'
import {useState, useEffect} from 'react'

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import {makeStyles} from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import CountryTableRow from './components/TableRow';
import CountryTableHead from './components/TableHead';


const useStyles = makeStyles({
    table: {

    }
})
const CountryTable = () => {
      const url = ("http://restcountries.eu/rest/v2/all");
    const [countries, setCountries] = useState();
    // const [error, setError] = useState();
    const classes = useStyles()

    useEffect(() => {
        
        const fetchData = async () => {
            try{
                const result = await fetch(url);
                const countries = await result.json();
                setCountries(countries);
            }catch(error){
                console.log('error', error)
                
            }
        
        }
        fetchData();
    }, [url])
    return ( 
      
        <TableContainer component={Paper}>
            <Table className={classes.Table} sx={{ minWidth: 650 }} aria-label="simple table">
                <CountryTableHead />
                <TableBody>
                    {countries.map(country => (
                        <CountryTableRow key={country.name} country={country}/>
                    ))}
                        
                    
                </TableBody>
            </Table>
      </TableContainer>
       
     );
}
   
 
export default CountryTable;