"use client"
import { Grid } from '@mui/material';
import React from 'react'
import TableUi from '../../../Components/UI/TableUi/TableUi';

function page() {
    const TABLE_HEAD = ["Company Name", "Address", "Mobile", "Email"];

    const TABLE_CELL = ["company_name", "address", "mobile", "email"];


    return (

        <Grid container bgcolor="">

            <TableUi

                heading="All Vendors"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="suppliers"

                fileName="purchases/vendors"

            />

        </Grid>
    )
}

export default page