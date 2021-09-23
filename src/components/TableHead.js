import React from 'react'

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';


const CountryTableHead = ({flag, name,capital, region,languages}) => {
    return (
        <div>
            <TableHead>
                <TableRow>
                    <TableCell align="right">Flag</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Capital</TableCell>
                    <TableCell align="right">Region</TableCell>
                    <TableCell align="right">Languages</TableCell>
                    </TableRow>
            </TableHead>
        </div>
    )
}

export default CountryTableHead
