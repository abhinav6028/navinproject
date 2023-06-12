"use client"
import { Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { API_URL } from '../../../urls/urls';

export default function CreateProduct() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };


    const formik = useFormik({

        initialValues: {
            category: '',
            description: '',
            
        },

        //validationSchema: SignUpSchema

        onSubmit: values => {

            axios.post(`${API_URL}/categories`, {

                category: values.category,
                description: values.description,

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
            textFieldName: 'category',
            id: 'category',
            name: 'category',
            type: "text",
            value: formik.values.category,
            touched: formik.touched.category,
            errors: formik.errors.category

        },
        {
            textFieldName: 'description',
            id: 'description',
            name: 'description',
            type: "text",
            value: formik.values.description,
            touched: formik.touched.description,
            errors: formik.errors.description
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