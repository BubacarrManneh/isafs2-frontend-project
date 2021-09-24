import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import useCountries from "../custom-hooks/useCountries";
import CountryTableRow from "./CountriesTableRow";
import CountryTableHead from "./CountriesTableHead";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function CountriesTable() {
  const classes = useStyles();

  const [countriesData, error] = useCountries(
    "https://restcountries-v2.herokuapp.com/all"
  );

  if (error) {
    return <p>Sorry, something went wrong</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <CountryTableHead />
        <TableBody>
          {countriesData.map(country => (
            <CountryTableRow key={country.name} country={country} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CountriesTable;