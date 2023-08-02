import { TableRow, TableCell, TableBody, Skeleton } from '@mui/material'

import React from 'react'

export default function SkeletonLoading() {

    const one = "wave"

    return (
        <TableRow >
            <TableCell component="th" scope="row" >
                <Skeleton animation="wave" variant="text" />
            </TableCell>
            <TableCell>
                <Skeleton animation="wave" variant="text" />
            </TableCell>
            <TableCell>
                <Skeleton animation="wave" variant="text" />
            </TableCell>
            <TableCell>
                <Skeleton animation="wave" variant="text" />
            </TableCell>
            <TableCell>
                <Skeleton animation="wave" variant="text" />
            </TableCell>
        </TableRow>
    )
}
