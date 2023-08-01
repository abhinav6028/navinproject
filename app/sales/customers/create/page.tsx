/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Grid } from '@mui/material';
import { BASE_URL } from '../../../../urls/urls';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useRouter } from 'next/navigation';
import { customerSchema } from '../validation';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import { message } from 'antd';

function page() {

    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const router = useRouter()


    const formik: any = useFormik({

        initialValues: {

            name: '',
            address: '',
            country: '',
            state: '',
            city: '',
            zip: '',
            email: '',
            mobile: ''

        },

        validationSchema: customerSchema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}customers`, {

                name: values.name,
                address: values.address,
                country: values.country,
                state: values.state,
                city: values.city,
                zip: values.zip,
                email: values.email,
                mobile: values.mobile,

            },

                {
                    headers
                }

            ).then((res: any) => {

                if (res.data.success) {
                    message.success(res.data.message, 1, router.back())
                } else {
                    message.error(res.data.message, 1,)
                }

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
            {
                textFieldName: 'Address',
                id: 'address',
                type: "text",

            },
            {
                textFieldName: 'Country',
                id: 'country',
                type: "text",
            },
            {
                textFieldName: 'State',
                id: 'state',
                type: "text",
            },
            {
                textFieldName: 'city',
                id: 'city',
                type: "text",
            },
            {
                textFieldName: 'Pin Code',
                id: 'zip',
                type: "text",
            },
            {
                textFieldName: 'Email',
                id: 'email',
                type: "email",
            },
            {
                textFieldName: 'Mobile',
                id: 'mobile',
                type: "number",
            },

        ],

    }

    const tabName = ["other Datails", "Address", "Contact Persons"]


    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', pb: 10, mt: { xs: 5, md: 5, lg: 2 } }} height="">

            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} px={10} mt={3} sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto', pb: 5 }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit} >

                        <FormHeader heading="Create Customer" />

                        <Grid container alignItems="center">

                            {formItems.main.map((data, index) =>

                                <CustomTextField key={index} data={data} formik={formik} />

                            )}

                        </Grid>

                    </form>
                </Grid>

            </Grid >

        </Grid >

    )
}

export default page
