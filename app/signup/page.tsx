"use client"
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../urls/urls';
import { CustomTextField } from '../../Components/TextField/TextField';
import { PRIMARY_COLOUR } from '../../urls/colours';
import { SignUpSchema } from './validation';

function page() {

    const formik = useFormik({

        initialValues: {
            name: '',
            tagline: '',
            address: '',
            mobile: '',
            email: '',
            logo: '',
            tax_type: '',
            tax_no: '',
            username: '',
            password: ''
        },

        validationSchema: SignUpSchema,

        onSubmit: values => {

            axios.post(`${BASE_URL}firms/register`, {

                name: values.name,
                taglin: values.tagline,
                address: values.address,
                mobile: values.mobile,
                email: values.email,
                logo: values.logo,
                tax_type: values.tax_type,
                tax_no: values.tax_no,
                username: values.username,
                password: values.password

            })

        },

    });

    const formItems = [
        {
            textFieldName: 'Name',
            id: 'name',
            type: "text",


        },
        {
            textFieldName: 'Tagline',
            id: 'tagline',
            type: "text",
        },
        {
            textFieldName: 'Adress',
            id: 'address',
            type: "text",

        },
        {
            textFieldName: 'Mobile',
            id: 'mobile',
            type: "number",

        },
        {
            textFieldName: 'Email',
            id: 'email',
            type: "email",

        },
        {
            textFieldName: 'Tax Type',
            id: 'tax_type',
            type: "text",

        },
        {
            textFieldName: 'Tax No',
            id: 'tax_no',
            type: 'text',

        },
        {
            textFieldName: 'UserName',
            id: 'username',
            type: "text",

        },
        {
            textFieldName: 'Password',
            id: 'password',
            type: "password",

        },

    ]

    return (

        <Grid container sx={{ justifyContent: 'center', alignItems: 'center', mt: { xs: 10 } }}>

            <Grid container xs={10} sm={10} md={10} lg={11} sx={{ justifyContent: 'center', bgcolor: '' }}>

                <Grid container md={4} sx={{
                    justifyContent: 'center', alignItems: 'center',
                    //bgcolor: { lg: "red", md: 'blue', sm: 'green', xs: 'yellow' }
                }}>

                    <Grid md={12}
                        sx={{ height: '50%' }}
                        component="img"
                        alt="login image."
                        src='assets/login/login.png'
                    />

                </Grid>

                <Grid container sx={{ mb: 14 }} lg={8}>

                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Typography sx={{ fontWeight: '600', color: '#1F51FF', fontSize: { xs: '1.5rem', lg: '2.5rem' }, height: 'fit-content', textAlign: 'center' }}>Sign Up !!</Typography>

                    </Grid>

                    <Grid container sx={{ mt: 2 }}>
                        <form>
                            <Grid container sx={{ alignItems: 'center' }} alignItems="center">

                                {formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />

                                )}

                            </Grid>

                            <Grid container sx={{ justifyContent: 'center', mt: 5 }}>

                                <Button type='submit' sx={{ width: '50%', bgcolor: PRIMARY_COLOUR, borderRadius: 2 }} variant="contained">

                                    <Typography sx={{ color: '#ffff', fontWeight: 550, py: 0.5 }}>Sign Up !!</Typography>

                                </Button>

                            </Grid>

                        </form>
                    </Grid>

                </Grid>

            </Grid>

        </Grid>

    )
}

export default page