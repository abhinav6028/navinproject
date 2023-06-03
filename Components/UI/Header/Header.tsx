"use client"
import { Box, Grid } from '@mui/material'
import React from 'react'

export default function Header() {
    return (
        <Grid container bgcolor="red">

            <Grid container lg={2} >

                <Box
                    component="img"
                    sx={{
                        height: 233,
                        width: 350,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />

            </Grid>

        </Grid>
    )
}
