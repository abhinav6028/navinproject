/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Grid, Divider } from '@mui/material';
import { BASE_URL } from '../../../../urls/urls';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useRouter } from 'next/navigation';
import { customerSchema } from '../validation';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import { Button, message } from 'antd';
import { PoweroffOutlined } from "@ant-design/icons";

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
                    message.success(res.data.message, 1)
                    router.back()
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

    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', pb: 10, mt: { xs: 5, md: 5, lg: 2 } }} height="">

            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} sx={{ borderRadius: 3 }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit} >

                        {/* <FormHeader heading="Create Customer" /> */}

                        <Grid justifyContent="center" bgcolor="" md={11} sx={{ bgcolor: '' }}>

                            <FormHeader xs="none" md="flex" heading="Create Customer" />

                        </Grid>

                        <Divider />

                        <Grid container alignItems="center">

                            {formItems.main.map((data, index) =>

                                <CustomTextField key={index} data={data} formik={formik} />

                            )}

                        </Grid>

                        <FormHeader xs="flex" md="none" />

                    </form>
                </Grid>

            </Grid >

        </Grid >

    )
}

export default page
