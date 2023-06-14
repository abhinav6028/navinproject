"use client"
import { Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { BASE_URL } from '../../../urls/urls';

function page() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };


    const formik = useFormik({

        initialValues: {
            name: '',
            code: '',
            address: '',
            mobile: ''

        },

        //validationSchema: SignUpSchema

        onSubmit: values => {

            axios.post(`${BASE_URL}employees`, {

                name: values.name,
                code: values.code,
                address: values.address,
                mobile: values.mobile
            },

                {
                    headers
                }

            ).then((res: any) => {
                console.log('api succesfull');
                console.log(res);
            })

        },

        //validationSchema: SignUpSchema

    });

    const formItems = [
        {
            textFieldName: 'name',
            id: 'name',
            name: 'name',
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name

        },
        {
            textFieldName: 'code',
            id: 'code',
            name: 'code',
            type: "text",
            value: formik.values.code,
            touched: formik.touched.code,
            errors: formik.errors.code
        },
        {
            textFieldName: 'address',
            id: 'address',
            name: 'address',
            type: "text",
            value: formik.values.address,
            touched: formik.touched.address,
            errors: formik.errors.address
        },
        {
            textFieldName: 'mobile',
            id: 'mobile',
            name: 'mobile',
            type: "text",
            value: formik.values.mobile,
            touched: formik.touched.mobile,
            errors: formik.errors.mobile
        },

    ]


    return (

        <Grid>

            <form onSubmit={formik.handleSubmit}>

                {

                    formItems.map((data, index) =>

                        <Grid key={index}>

                            <label >{data.textFieldName}</label>

                            <TextField
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

                    )

                }

                <button type="submit">Submit</button>

            </form>

        </Grid>

    )
}

export default page