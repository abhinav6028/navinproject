import Paper from '@material-ui/core/Paper/Paper'
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import getData from '../../../hooks/getdata';
//import getData from '../../../hooks/getdata';


async function getData() {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const res = await fetch('https://apierp.oyvaa.com/products', { headers });

    return res.json();

}


export default async function TableUi() {

    const fetchedData = await getData();

    const data = fetchedData.result

    const HEADING = ["NAME", "CATEGORY", "SUB CATEGORY",]

    return (

        <Grid container justifyContent="center" >

            <Grid lg={11} sx={{ mt: 5 }}>

                <TableContainer component={Paper}>

                    <Table sx={{ width: '100%' }} aria-label="simple table">

                        <TableHead>

                            <TableRow >

                                {
                                    HEADING.map((data, index) =>

                                        <TableCell key={index} align="center">

                                            <Typography sx={{
                                                fontWeight: 600
                                            }} variant='h6'>{data}</Typography>

                                        </TableCell>

                                    )
                                }

                                <TableCell align="center">

                                    <Typography sx={{
                                        fontWeight: 600
                                    }} variant='h6'>ACTIONS</Typography>

                                </TableCell>

                            </TableRow>

                        </TableHead>


                        {
                            data.map((item: any, index: any) =>

                                <TableBody key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                    <TableCell align="center">{item.name}</TableCell>
                                    <TableCell align="center">{item.category.name}</TableCell>
                                    <TableCell align="center">{item.tax_amount}</TableCell>

                                    <TableCell align="center">

                                        <MoreVertIcon />

                                    </TableCell>

                                </TableBody>

                            )
                        }


                    </Table>

                </TableContainer>

            </Grid>

        </Grid >
    )
}
