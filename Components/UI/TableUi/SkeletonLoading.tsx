import { TableRow, TableCell, TableBody } from '@mui/material'
import { Skeleton } from 'antd'
import React from 'react'

export default function SkeletonLoading() {
    return (
        <TableRow >
            <TableCell component="th" scope="row">
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
