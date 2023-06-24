/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import SalesTable from '../../Components/UI/TableUi/SalesTable'

function page() {

    const items = [
        {
            title: "Series",
            titleName: 'SAL-ORD-.YYYY.-'
        },
        {
            title: "Date",
            titleName: '22-06-2023'
        },
        {
            title: "Order Type",
            titleName: 'Sales'
        }
    ]

    const items2 = [
        {
            title: "Total Quantity",
            titleName: '0'
        },
        {
            title: "Total (INR)",
            titleName: '0'
        },
        {
            title: "Total Taxes and Charges (INR)",
            titleName: '0'
        },

    ]



    return (

        <Grid container justifyContent="center">

            <Grid lg={10} mt={3}>

                <Typography variant='h4' fontWeight="600">New Sales Order</Typography>


                <Grid justifyContent="center" mt={4} container >

                    <Grid container lg={11} sx={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px", pb: 4 }} >

                        <Box sx={{ bgcolor: '', px: 1.5, py: 1.5, ml: 2, borderBottomStyle: 'solid', borderBottomColor: '#1F51FF', cursor: 'pointer' }}>

                            <Typography variant='h6' fontWeight="600">Details</Typography>

                        </Box>


                        <Grid container display="flex" justifyContent="space-around" sx={{ mt: 6 }}>



                            {
                                items.map((data, index) => (

                                    <Box key={index}>
                                        <Typography fontWeight="550">{data.title}</Typography>

                                        <Box sx={{ bgcolor: '#E5E4E2', width: 350, mt: 1, borderRadius: 2 }}>

                                            <Typography sx={{ py: 1, ml: 1, fontWeight: 550 }}>{data.titleName}</Typography>

                                        </Box>

                                    </Box>

                                ))
                            }

                        </Grid>

                        <Typography variant='h6' fontWeight="600" sx={{ ml: 2, mt: 3 }}>Currently and Price List</Typography>

                        <Grid container sx={{ mt: 3 }} justifyContent="center">

                            <SalesTable />

                            <Box bgcolor="#E5E4E2" ml="auto" mr={4} mt={3} sx={{ borderRadius: 3, cursor: 'pointer' }}>

                                <Typography sx={{ px: 4, py: 1, fontWeight: 550 }}>Download</Typography>

                            </Box>

                        </Grid>

                        <Grid container display="flex" justifyContent="space-around" sx={{ mt: 6 }}>

                            {
                                items2.map((data, index) => (

                                    <Box key={index}>
                                        <Typography fontWeight="550">{data.title}</Typography>

                                        <Box sx={{ bgcolor: '#E5E4E2', width: 350, mt: 1, borderRadius: 2 }}>

                                            <Typography sx={{ py: 1, ml: 1, fontWeight: 550 }}>{data.titleName}</Typography>

                                        </Box>

                                    </Box>

                                ))
                            }

                        </Grid>

                        <Grid sx={{ bgcolor: '', px: 1.5, py: 1.5, ml: 2, mt: 2 }}>

                            <Typography variant='h6' fontWeight="600">Total</Typography>

                        </Grid>

                        <Grid container >

                            <Grid lg={6} ml="auto">
                                {
                                    items2.map((data, index) => (

                                        <Box key={index} width="%">

                                            <Typography fontWeight="550">{data.title}</Typography>

                                            <Box width="90%" sx={{ bgcolor: '#E5E4E2', mt: 1, borderRadius: 2 }}>

                                                <Typography sx={{ py: 1, ml: 1, fontWeight: 550 }}>{data.titleName}</Typography>

                                            </Box>

                                        </Box>

                                    ))
                                }
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

        </Grid >
    )
}

export default page