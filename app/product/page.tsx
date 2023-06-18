"use client"
import { Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import CreateButton from '../../Components/UI/Button/Button'
import ProductTable from '../../Components/UI/TableUi/ProductTable'

function page() {

  const TABLE_HEAD = ["NAME", "CODE", "ID", "DESCRIPTION", "CATEGORY ID"];

  const TABLE_CELL = ["name", "code", "id", "description", "category_id"];


  return (

    <Grid>

      <CreateButton path="/product/create">CREATE</CreateButton >

      <ProductTable

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="products"

        editPath="product"

      />

    </Grid>

  )
}

export default page









