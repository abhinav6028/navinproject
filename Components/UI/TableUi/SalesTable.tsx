"use client"
import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';

function SalesTable() {

    function createData(
        name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <Grid container bgcolor="" lg={11.5} >

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell align="center">tem Code</TableCell>
                            <TableCell align="center">Delivery Date</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Rate (INR)</TableCell>
                            <TableCell align="center">Amount (INR)</TableCell>
                            <TableCell align="center"> <SettingsIcon sx={{ fontSize: 28, cursor: 'pointer' }} /> </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                            <TableCell component="th" scope="row">DATA</TableCell>
                            <TableCell align="center">DATA</TableCell>
                            <TableCell align="center">DATA</TableCell>
                            <TableCell align="center">DATA</TableCell>
                            <TableCell align="center">DATA</TableCell>
                            <TableCell align="center">DATA</TableCell>
                            <TableCell align="center"> <EditIcon sx={{ fontSize: 28, cursor: 'pointer' }} /> </TableCell>

                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

        </Grid>

    )

}

export default SalesTable