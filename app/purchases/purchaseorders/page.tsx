"use client"
import { Grid } from '@mui/material'
import React from 'react'
import ProductTable from '../../../Components/UI/TableUi/ProductTable';

function page() {
    const TABLE_HEAD = ["NAME", "CODE", "ID", "DESCRIPTION", "CATEGORY ID"];

    const TABLE_CELL = ["name", "code", "id", "description", "category_id"];


    return (

        <Grid container bgcolor="">

            <ProductTable

                heading="New Purchase Orders"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="purchase-orders"

                fileName="purchases/purchaseorders"

            />

        </Grid>
    )
}

export default page