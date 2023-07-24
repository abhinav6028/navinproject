"use client"
import { Grid } from '@mui/material'
import React from 'react'
import ProductTable from '../../../Components/UI/TableUi/ProductTable';

function page() {
    const TABLE_HEAD = ["Purchase Invoice No", "Due Date", "Grand Total", "Discount"];

    const TABLE_CELL = ["purchaseInvoiceNo", "dueDate", "grandTotal", "discount"];


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