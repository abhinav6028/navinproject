/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import SalesFormField from '../../Components/UI/Form/SalesFormField'
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

    const [value, setValue]: any = React.useState([{ one: "", two: "", three: "" }]);

    console.log("value", value);


    const onChange = (e: any, index: any, data: any) => {

        const newValues: any = [...value]

        newValues[index][data] = e.target.value

        setValue(newValues)

    }

    const add = (e: any, index: any,) => {

        setValue([...value, { id: value.length, name: '' }])

    }

    // const deleteItem = (removeItem: any) => {

    //     const removeItems = value.filter((values: any, index: any) => index !== removeItem)

    //     setValue(removeItems)

    // }


    return (

        <Grid container justifyContent="center">

            <Grid lg={10} mt={3}>

                <Typography variant='h4' fontWeight="600">New Sales Order</Typography>


                <Grid justifyContent="center" mt={4} container >

                    <Grid container lg={11} sx={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px", pb: 4 }} >

                        <Box sx={{ bgcolor: '', px: 1.5, py: 1.5, ml: 2, borderBottomStyle: 'solid', borderBottomColor: '#1F51FF', cursor: 'pointer' }}>

                            <Typography variant='h6' fontWeight="600">Details</Typography>

                        </Box>


                        <SalesFormField items={items} />


                        <Grid justifyContent="center" alignItems="center" mt={5} container>

                            {value.map((data: any, index: any) =>

                                <Grid lg={11} mt={3} justifyContent="space-around" container key={index}>

                                    <TextField id="outlined-basic" variant="outlined" type="text" onChange={(e) => onChange(e, index, "one")} />

                                    <TextField id="outlined-basic" variant="outlined" type="text" onChange={(e) => onChange(e, index, "two")} />

                                    <TextField id="outlined-basic" variant="outlined" type="text" onChange={(e) => onChange(e, index, "three")} />

                                    <Button onClick={() => add} variant="contained">Add</Button>

                                    {/* <Button onClick={() => deleteItem(index)} variant="contained">Remove</Button> */}

                                </Grid>

                            )}

                        </Grid>

                        <Typography variant='h6' fontWeight="600" sx={{ ml: 2, mt: 3 }}>Currently and Price List</Typography>

                        <SalesTable items={value} />

                        <Box bgcolor="#E5E4E2" ml="auto" mr={4} mt={3} sx={{ borderRadius: 3, cursor: 'pointer' }}>

                            <Typography sx={{ px: 4, py: 1, fontWeight: 550 }}>Download</Typography>

                        </Box>

                        <SalesFormField items={items2} />

                        <Grid sx={{ bgcolor: '', px: 1.5, py: 1.5, ml: 2, mt: 2 }}>

                            <Typography variant='h6' fontWeight="600">Total</Typography>

                        </Grid>

                        <Grid container >

                            <SalesFormField items={items2} />

                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

        </Grid >
    )
}

export default page