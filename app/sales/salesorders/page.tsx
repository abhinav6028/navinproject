"use client"
import { Grid } from '@mui/material';
import React from 'react'
import ProductTable from '../../../Components/UI/TableUi/ProductTable';

function page() {
  const TABLE_HEAD = ["NAME", "CODE", "ID", "DESCRIPTION", "CATEGORY ID"];

  const TABLE_CELL = ["name", "code", "id", "description", "category_id"];


  return (

    <Grid container bgcolor="">

      <ProductTable

        heading="All Sales Orders"

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="products"

        fileName="sales/salesorders"

      />

    </Grid>

  )
}

export default page
