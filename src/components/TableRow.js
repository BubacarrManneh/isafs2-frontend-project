import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
const CountryTableRow = ({flag, name, capital, region, languages}) => {
    return (
        <div>
            <TableRow>
                <TableCell>{flag}</TableCell>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="right">{capital})</TableCell>
                <TableCell align="right">{region}</TableCell>
                <TableCell align="right">{languages[0].name}</TableCell>
            </TableRow>
        </div>
    )
}

export default CountryTableRow
