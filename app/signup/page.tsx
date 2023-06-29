"use client"
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../urls/urls';
import { SubmitButton } from '../../Components/UI/Button/Button';

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

        // validationSchema: SignUpSchema,

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

            }).then((res) => {
                // alert('working');
                console.log('api succesfull');
                console.log(res);
            })

            //alert(JSON.stringify(values, null, 2));
        },

        //validationSchema: SignUpSchema

    });

    const formItems = [
        {
            textFieldName: 'Name',
            id: 'name',
            name: 'name',
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name

        },
        {
            textFieldName: 'Tagline',
            id: 'tagline',
            name: 'tagline',
            type: "text",
            value: formik.values.tagline,
            touched: formik.touched.tagline,
            errors: formik.errors.tagline
        },
        {
            textFieldName: 'Adress',
            id: 'address',
            name: 'address',
            type: "text",
            value: formik.values.address,
            touched: formik.touched.address,
            errors: formik.errors.address
        },
        {
            textFieldName: 'Mobile',
            id: 'mobile',
            name: 'mobile',
            type: "number",
            value: formik.values.mobile,
            touched: formik.touched.mobile,
            errors: formik.errors.mobile
        },
        {
            textFieldName: 'Email',
            id: 'email',
            name: 'email',
            type: "email",
            value: formik.values.email,
            touched: formik.touched.email,
            errors: formik.errors.email
        },
        {
            textFieldName: 'Tax Type',
            id: 'tax_type',
            name: 'tax_type',
            type: "text",
            value: formik.values.tax_type,
            touched: formik.touched.tax_type,
            errors: formik.errors.tax_type
        },
        {
            textFieldName: 'Tax No',
            id: 'tax_no',
            name: 'tax_no',
            type: 'number',
            value: formik.values.tax_no,
            touched: formik.touched.tax_no,
            errors: formik.errors.tax_no
        },
        {
            textFieldName: 'UserName',
            id: 'username',
            name: 'username',
            type: "text",
            value: formik.values.username,
            touched: formik.touched.username,
            errors: formik.errors.username
        },
        {
            textFieldName: 'Password',
            id: 'password',
            name: 'password',
            type: "password",
            value: formik.values.password,
            touched: formik.touched.password,
            errors: formik.errors.password
        },

    ]


    return (

        <Grid container sx={{ position: 'fixed', top: "0", left: "0", zIndex: 100, height: '100vh', bgcolor: 'white' }}>

            <Grid lg={11} container justifyContent="center" alignItems="center">

                <Grid container justifyContent="center" alignItems="center" sx={{ bgcolor: '' }} lg={5}>

                    <Grid lg={10}
                        sx={{ height: '80%' }}
                        component="img"
                        alt="login image."
                        src='assets/login/login.jpg'
                    />

                </Grid>

                <Grid container justifyContent="center" sx={{}} lg={7}>

                    <Grid container justifyContent="center">

                        <Typography variant='h4' sx={{ fontWeight: '600', color: '#1F51FF' }}>Sign Up</Typography>

                    </Grid>

                    <form action="" style={{ width: '100%', justifyContent: 'center' }}>



                        <Grid container justifyContent="space-around">

                            {

                                formItems.map((data, index) =>

                                    <Grid container bgcolor="" key={index} lg={6} my={3}>

                                        <Grid container bgcolor="">

                                            <TextField sx={{ width: "90%" }} //variant="standard"
                                                label={data.textFieldName}
                                                id={data.id}
                                                name={data.name}
                                                type={data.type}
                                                onChange={formik.handleChange}
                                                value={data.value}
                                                error={data.touched && Boolean(data.errors)}
                                                helperText={data.touched && data.errors}
                                                onBlur={formik.handleBlur}
                                            />

                                        </Grid>

                                    </Grid>

                                )

                            }

                            <Grid container justifyContent="center" alignItems="center" bgcolor="red" lg={6}>

                                A

                            </Grid>

                        </Grid>

                    </form>

                    <SubmitButton>Sign Up</SubmitButton>
                </Grid>

            </Grid>

        </Grid>

    )
}

export default page