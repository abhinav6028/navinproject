"use client"
import { Grid } from '@mui/material';
import React from 'react'
import TableUi from '../../../Components/UI/TableUi/TableUi';

function page() {

    const TABLE_HEAD = ["Name", "Description"];

    const TABLE_CELL = ["name", "description"];

    return (
        <Grid container bgcolor="">

            <TableUi

                heading="All Categories"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="categories"

                fileName="sales/customers"

            />

        </Grid>
    )
}

export default page