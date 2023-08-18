/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Divider, Grid } from '@mui/material';
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

    const formItems = [

        {
            textFieldName: 'Category',
            id: 'name',
            type: "text",

        },
        {
            textFieldName: 'Description',
            id: 'description',
            type: "text",
            rows: 4
        }

    ]

    return (
        <Grid container justifyContent="center" sx={{ ml: 'auto', pb: 10, mt: { xs: 5, md: 0 } }} height="">

            {/* <Grid container justifyContent="center"> */}


            <form style={{ width: '100%',justifyContent:"center" }} onSubmit={formik.handleSubmit} >

                <Grid justifyContent="center" bgcolor="" md={11} sx={{ bgcolor: '' }}>

                    <FormHeader heading="Create Customer" />

                </Grid>

                <Divider />


                <Grid container justifyContent="center" bgcolor="" md={11} sx={{ bgcolor: '' }}>

                    <Grid md={9} container justifyContent="start" alignItems="center" sx={{ p: 1 ,bgcolor: ''}}>

                        {formItems.map((data, index) =>

                            <CustomTextField rows={data.rows} key={index} data={data} formik={formik} />

                        )}

                    </Grid>

                </Grid>



            </form>
            {/* </Grid> */}



        </Grid >
    )
}

export default page