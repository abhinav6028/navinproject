"use client"
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function page() {



    return (
        <Grid container justifyContent="center">

            <Grid lg={10} mt={3}>

                <Typography variant='h4' fontWeight="600">New Sales Order</Typography>


                <Grid justifyContent="center" mt={4} container >

                    <Grid container lg={11} sx={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }} >

                        <Box
                            onClick={() => alert('////////////////////')}
                            sx={{ bgcolor: '', px: 1.5, py: 1.5, ml: 2, borderBottomStyle: 'solid', borderBottomColor: '#1F51FF', cursor: 'pointer' }}>

                            <Typography variant='h6' fontWeight="600">Details</Typography>

                        </Box>

                        <Box
                        
                            onClick={() => alert('////////////////////')}
                            sx={{ bgcolor: '', px: 1.5, py: 1.5, ml: 2, borderBottomStyle: 'solid', borderBottomColor: '#1F51FF', cursor: 'pointer' }}>

                            <Typography variant='h6' fontWeight="600">Details</Typography>

                        </Box>

                    </Grid>

                </Grid>



            </Grid>

        </Grid >
    )
}

export default page