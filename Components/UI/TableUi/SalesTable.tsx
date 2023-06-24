"use client"
import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';

function SalesTable() {

    const tableHead = ['No', 'Item Code', 'Delevery Code', 'Quantity', 'Rate(INR)', 'Amount (INR)']

    return (
        <Grid container bgcolor="" lg={11.5} >

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>

                        <TableRow>

                            {
                                tableHead.map((data, index) =>
                                    <TableCell key={index} align="center">{data}</TableCell>
                                )
                            }

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