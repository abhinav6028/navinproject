"use client"
import { Button, Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

function page() {

    const router = useRouter();

    return (
        <Grid container sx={{ bgcolor: 'red', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="contained" onClick={() => router.push('purchases/expences/create')}>Record Expences</Button>
        </Grid>
    )
}

export default page