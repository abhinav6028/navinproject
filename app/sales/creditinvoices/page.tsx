/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Button, Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {

  const router = useRouter();

  return (
    <Grid container sx={{ bgcolor: 'red', justifyContent: 'center', alignItems: 'center' }}>

      <Button variant="contained" onClick={() => router.push('/sales/creditinvoices/create')}>Create Credit Note</Button>

    </Grid>
  )
}

export default page