import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

import useCountries from "../custom-hooks/useCountries";
import TableRowCountry from "./CountryTableRow";
import TableHeadCountry from "./CountryTableHead";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TableCountries() {
  const classes = useStyles();

  const [countriesData, error] = useCountries(
    "https://restcountries.eu/rest/v2/all"
  );

  if (error) {
    return <p>Sorry, something went wrong</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHeadCountry />
        <TableBody>
          {countriesData.map(country => (
            <TableRowCountry key={country.name} country={country} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableCountries;