import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tableCell: {
    backgroundColor: "#1E90FF",
    width: "15vw",
    color: "#FFFAF0",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1rem"
    
  },
});
function CountriesTableHead() {
   const classes = useStyles();
  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.tableCell} >FLAG</TableCell>
        <TableCell className={classes.tableCell} align='center'>NAME</TableCell>
        <TableCell className={classes.tableCell} align='center'>POPULATION</TableCell>
        <TableCell className={classes.tableCell} align='center'>REGION</TableCell>
        <TableCell className={classes.tableCell} align='center'>LANGUAGES</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default CountriesTableHead;