"use client"
import { FormControl, Grid, Typography, InputLabel, Select, MenuItem } from '@mui/material'
import React from 'react'
import useBearerToken from '../../../../hooks/useBearerToken';
import { useFormik } from 'formik';
import { useQueryFetch } from '../../../../hooks/useFetch';
import axios from 'axios';
import { BASE_URL } from '../../../../urls/urls';
import FormHeader from '../../../../Components/UI/Form/FormHeader';

function page() {
    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const { fetchedData } = useQueryFetch('categories');

    const subCategories = useQueryFetch('sub-categories').fetchedData


    console.log("subCategories", subCategories);

    const [categoryId, setCategoryId] = React.useState('');

    // console.log('categoryId', categoryId);

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategoryId(event.target.value as string);
    };

    const [customerName, setCustomerName] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCustomerName(event.target.value as string);
    };

    const formik: any = useFormik({

        initialValues: {

            name: '',

        },

        //validationSchema: employeeShema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}products`, {

                name: values.name,

            },

                {
                    headers
                }

            ).then((res: any) => {
                console.log('api succesfull');
                console.log(res);
            })

        },

    });

    const formItems = {
        main: [
            {
                textFieldName: 'Customer Name',
                id: 'name',
                type: "text",

            },

        ],

    }

    const tabName = ["other Datails", "Address", "Contact Persons"]

    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 2 }} height="">


            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} px={10} mt={3} sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto' }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Customer" />

                        <Grid md={5} container alignItems="end">


                            <Grid md={4} sx={{ bgcolor: '' }} >

                                <Typography variant='h6' fontWeight="bold" textAlign="end"> name : </Typography>

                            </Grid>


                            <Grid md={6} sx={{ ml: 4, mt: 3, bgcolor: '' }}>

                                <FormControl fullWidth>
                                    <Select
                                        sx={{ width: '100%', height: 40 }}
                                        placeholder="Customer Name"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={customerName}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>

                        </Grid>

                    </form>
                </Grid>

            </Grid >

        </Grid >

    )
}

export default page