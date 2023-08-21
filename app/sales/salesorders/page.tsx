"use client"
import { Grid } from '@mui/material';
import React from 'react'
import TableUi from '../../../Components/UI/TableUi/TableUi';

function page() {
  const TABLE_HEAD = ["Total", "POno", "Sub Total"];

  const TABLE_CELL = ["total", "POno", "subTotal"];


  return (

    <Grid container bgcolor="">

      <TableUi

        heading="All Sales Orders"

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="sales-orders"

        // create="salesorders"

      />

    </Grid>

  )
}

export default page
