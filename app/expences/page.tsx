"use client"
import { Grid } from '@mui/material'
import React from 'react'
import CreateButton from '../../Components/UI/Button/Button';
import TableUi from '../../Components/UI/TableUi/TableUi';

function page() {
  const TABLE_HEAD = ["CATEGORY", "AMOUNT", "DESCRIPTION"];

  const TABLE_CELL = ["category", "amount", "description"];


  return (

    <Grid>

      <CreateButton path="/expences/create">CREATE</CreateButton >

      <TableUi

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="expences"

        editPath="expences"

      />

    </Grid>

  )
}

export default page