"use client"
import { Grid } from '@mui/material';
import React from 'react'
import ProductTable from '../../../Components/UI/TableUi/ProductTable';

function page() {
    const TABLE_HEAD = ["Jv No", "Code", "Date"];

    const TABLE_CELL = ["jvNo", "refNo", "date"];


    return (

        <Grid container bgcolor="">

            <ProductTable

                heading="Manual Journals"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="journal-entries"

            //fileName="purchases/purchaseorders"

            />

        </Grid>
    )
}

export default page