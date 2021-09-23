import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function TableRowCountry({
  country: { flag, name, population, region, languages },
}) {
  return (
    <TableRow>
      <TableCell>
        <img src={flag} width='270px' height='150px' alt='country flag' />
      </TableCell>
      <TableCell align='center'>{name}</TableCell>
      <TableCell align='center'>{population}</TableCell>
      <TableCell align='center'>{region}</TableCell>
      <TableCell align='center'>{languages[0].name}</TableCell>
    </TableRow>
  );
}

export default TableRowCountry;