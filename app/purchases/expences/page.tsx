"use client"
import { Grid } from '@mui/material';
import React from 'react'
import TableUi from '../../../Components/UI/TableUi/TableUi';

function page() {

    const TABLE_HEAD = ["CATEGORY", "AMOUNT", "DESCRIPTION"];

    const TABLE_CELL = ["category", "amount", "description"];


    return (

        <Grid container>

            <TableUi

                heading="Expences"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="expences"

                fileName="expences"

            />
 
        </Grid>

    )
}

export default page