import { Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { BASE_URL } from '../../urls/urls';

export default function CreateProduct() {
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };


    const formik = useFormik({

        initialValues: {
            code: '',
            name: '',
            brand: '',
            description: '',
            unit: '',
            category_id: '',
            //subcategory_id: null,
            tax_type: '',
            tax_amount: '',
            remarks: ''
        },


        onSubmit: values => {

            axios.post(`${BASE_URL}/products`, {

                code: values.code,
                name: values.name,
                brand: values.brand,
                description: values.description,
                unit: values.unit,
                category_id: values.category_id,
                //subcategory_id: values.subcategory_id,
                tax_type: values.tax_type,
                tax_amount: values.tax_amount,
                remarks: values.remarks

            },

                {
                    headers
                }

            ).then((res: any) => {
                // alert('working');
                console.log('api succesfull');
                console.log(res);
            })

        },

        //validationSchema: SignUpSchema

    });

    const formItems = [
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
            textFieldName: 'name',
            id: 'name',
            name: 'name',
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name
        },
        {
            textFieldName: 'brand',
            id: 'brand',
            name: 'brand',
            type: "text",
            value: formik.values.brand,
            touched: formik.touched.brand,
            errors: formik.errors.brand
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
        {
            textFieldName: 'unit',
            id: 'unit',
            name: 'unit',
            type: "text",
            value: formik.values.unit,
            touched: formik.touched.unit,
            errors: formik.errors.unit
        },
        {
            textFieldName: 'category_id',
            id: 'category_id',
            name: 'category_id',
            type: "number",
            value: formik.values.category_id,
            touched: formik.touched.category_id,
            errors: formik.errors.category_id
        },

        {
            textFieldName: 'tax_type',
            id: 'tax_type',
            name: 'tax_type',
            type: "number",
            value: formik.values.tax_type,
            touched: formik.touched.tax_type,
            errors: formik.errors.tax_type
        },
        {
            textFieldName: 'tax_amount',
            id: 'tax_amount',
            name: 'tax_amount',
            type: "number",
            value: formik.values.tax_amount,
            touched: formik.touched.tax_amount,
            errors: formik.errors.tax_amount
        },
        {
            textFieldName: 'remarks',
            id: 'remarks',
            name: 'remarks',
            type: "remarks",
            value: formik.values.remarks,
            touched: formik.touched.remarks,
            errors: formik.errors.remarks
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

