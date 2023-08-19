"use client"
import { Grid } from '@mui/material'
import React from 'react'
import TableUi from '../../../Components/UI/TableUi/TableUi';
<<<<<<< HEAD

=======
>>>>>>> 537dbdbb2ab5c2e76ddcd249d6b6f86b8a968cf7

function page() {
    const TABLE_HEAD = ["Purchase Invoice No", "Due Date", "Grand Total", "Discount"];

    const TABLE_CELL = ["purchaseInvoiceNo", "dueDate", "grandTotal", "discount"];


    return (

        <Grid container bgcolor="">

            <TableUi

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