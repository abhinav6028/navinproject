import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '../../urls/urls';
import Yup from "yup";
//import { SignUpSchema } from './SignUpSchema';

export default function SignUp() {

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

        //validationSchema: SignUpSchema

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
            textFieldName: 'name',
            id: 'name',
            name: 'name',
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name

        },
        {
            textFieldName: 'tagline',
            id: 'tagline',
            name: 'tagline',
            type: "text",
            value: formik.values.tagline,
            touched: formik.touched.tagline,
            errors: formik.errors.tagline
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
            type: 'number',
            value: formik.values.tax_no,
            touched: formik.touched.tax_no,
            errors: formik.errors.tax_no
        },
        {
            textFieldName: 'username',
            id: 'username',
            name: 'username',
            type: "text",
            value: formik.values.username,
            touched: formik.touched.username,
            errors: formik.errors.username
        },
        {
            textFieldName: 'password',
            id: 'password',
            name: 'password',
            type: "password",
            value: formik.values.password,
            touched: formik.touched.password,
            errors: formik.errors.password

            //alert(JSON.textify(values, null, 2));
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

                <input
                    type='file'
                    name='logo'
                    accept='image/*'
                    onChange={formik.handleChange}
                />

                <button type="submit">Submit</button>

            </form>

        </Grid>

    )
}