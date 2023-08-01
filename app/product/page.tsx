"use client"
import { Grid } from '@mui/material'
import React from 'react'
import ProductTable from '../../Components/UI/TableUi/ProductTable'

function page() {

  const TABLE_HEAD = ["Product", "Brand", "Unit", "Created At"];

  const TABLE_CELL = ["name", "brand", "unit", "category_id"];

  const dayName = new Date('2023-06-21T07:16:29.000Z').toLocaleDateString('en-US', { date: 'long' });

  console.log("///////////////////////", dayName);


  return (

    <Grid container bgcolor="">


      <ProductTable

        heading="AVAILABLE PRODUCTS"

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="products"

        fileName="product"

      />

    </Grid>

  )
}

export default page