"use client"
import { Grid } from '@mui/material'
import React from 'react'
import Header from '../Components/UI/Layout/Header/Header'
import Calendar from '../Components/Calendar/Calendar'



export default function page() {
  return (
    <Grid container sx={{ justifyContent: 'center', bgcolor: '#fafaf8' }}>

      <Grid container lg={11.5}>

        <Header />

        <Calendar />




      </Grid>


    </Grid>
  )
}

