"use client"
import { Grid } from '@mui/material'
import React from 'react'
import CreateButton from '../../Components/UI/Button/Button'
import TableUi from '../../Components/UI/TableUi/TableUi'

function page() {
  const TABLE_HEAD = ["COMPENY NAME", "ADRESS", "MOBILE", "EMAIL", "CONTACT PERSON", "CONTACT PERSON MOBILE"];

  const TABLE_CELL = ["company_name", "address", "mobile", "email", "contact_person_name", "contact_person_mobile"];


  return (

    <Grid>

      <CreateButton path="/suppliers/create">CREATE</CreateButton >

      <TableUi

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="suppliers"

        editPath="suppliers"

      />

    </Grid>

  )
}

export default page

