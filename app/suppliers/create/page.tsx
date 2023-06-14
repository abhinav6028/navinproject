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
            company_name: '',
            address: '',
            mobile: '',
            email: '',
            tax_type: '',
            tax_no: '',
            contact_person_name: '',
            contact_person_mobile: ''

        },

        //validationSchema: SignUpSchema

        onSubmit: values => {

            axios.post(`${BASE_URL}suppliers`, {

                company_name: values.company_name,
                address: values.address,
                mobile: values.mobile,
                email: values.email,
                tax_type: values.tax_type,
                tax_no: values.tax_no,
                contact_person_name: values.contact_person_name,
                contact_person_mobile: values.contact_person_mobile,


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
            textFieldName: 'company_name',
            id: 'company_name',
            name: 'company_name',
            type: "text",
            value: formik.values.company_name,
            touched: formik.touched.company_name,
            errors: formik.errors.company_name

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
            type: "number",
            value: formik.values.mobile,
            touched: formik.touched.mobile,
            errors: formik.errors.mobile
        },
        {
            textFieldName: 'email',
            id: 'email',
            name: 'email',
            type: "email",
            value: formik.values.email,
            touched: formik.touched.email,
            errors: formik.errors.email
        },
        {
            textFieldName: 'tax_type',
            id: 'tax_type',
            name: 'tax_type',
            type: "text",
            value: formik.values.tax_type,
            touched: formik.touched.tax_type,
            errors: formik.errors.tax_type
        },
        {
            textFieldName: 'tax_no',
            id: 'tax_no',
            name: 'tax_no',
            type: "text",
            value: formik.values.tax_no,
            touched: formik.touched.tax_no,
            errors: formik.errors.tax_no
        },
        {
            textFieldName: 'contact_person_name',
            id: 'contact_person_name',
            name: 'contact_person_name',
            type: "text",
            value: formik.values.contact_person_name,
            touched: formik.touched.contact_person_name,
            errors: formik.errors.contact_person_name
        },
        {
            textFieldName: 'contact_person_mobile',
            id: 'contact_person_mobile',
            name: 'contact_person_mobile',
            type: "text",
            value: formik.values.contact_person_mobile,
            touched: formik.touched.contact_person_mobile,
            errors: formik.errors.contact_person_mobile
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