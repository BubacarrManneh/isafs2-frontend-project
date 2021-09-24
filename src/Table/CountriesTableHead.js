import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function CountriesTableHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>FLAG</TableCell>
        <TableCell align='center'>NAME</TableCell>
        <TableCell align='center'>POPULATION</TableCell>
        <TableCell align='center'>REGION</TableCell>
        <TableCell align='center'>LANGUAGES</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default CountriesTableHead;