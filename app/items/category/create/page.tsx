/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid } from '@mui/material';
import { message } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react'
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { BASE_URL } from '../../../../urls/urls';

function page() {

    const token = useBearerToken();

    const router = useRouter();

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const formik = useFormik({

        initialValues: {
            name: '',
            description: '',
        },

        onSubmit: values => {

            axios.post(`${BASE_URL}categories`, {

                name: values.name,
                description: values.description,

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
                textFieldName: 'Category',
                id: 'name',
                type: "text",

            },
            {
                textFieldName: 'Description',
                id: 'description',
                type: "text",
            }
        ]
    }

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