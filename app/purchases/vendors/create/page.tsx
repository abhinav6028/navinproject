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
import VendorTab from '../../../../Components/Vendore/VendorTab';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';
import { vendorsSchema } from '../validation';

function page() {

    const token = useBearerToken()

    const router = useRouter()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const { fetchedData } = useQueryFetch('categories');



    const formik: any = useFormik({

        initialValues: {

            company_name: '',
            address: '',
            mobile: '',
            email: '',
            tax_type: '',
            tax_no: '',
            contact_person_name: '',
            contact_person_mobile: '',


        },

        validationSchema: vendorsSchema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}suppliers`, {

                "company_name": values.company_name,
                "address": values.address,
                "mobile": values.mobile,
                "email": values.email,
                "tax_type": values.tax_type,
                "tax_no": values.tax_no,
                "contact_person_name": values.contact_person_name,
                "contact_person_mobile": values.contact_person_mobile

            },

                {
                    headers
                }

            ).then((res: any) => {

                if (res.data.success) {
                    message.success(res.data.message, 1)
                    router.push('items/products')
                } else {
                    message.error(res.data.message, 1,)
                }
            })

        },

    });

    const formItems = {
        main: [
            {
                textFieldName: 'Company Name',
                id: 'company_name',
                type: "text",

            },
            {
                textFieldName: 'Address',
                id: 'address',
                type: "text",
            },
            {
                textFieldName: 'Mobile',
                id: 'mobile',
                type: "number",
            },
            {
                textFieldName: 'Email',
                id: 'email',
                type: "email",
            },
            {
                textFieldName: 'Tax Type',
                id: 'tax_type',
                type: "text",
            },
            {
                textFieldName: 'Tax No',
                id: 'tax_no',
                type: "text",
            },
            {
                textFieldName: 'Sales Man',
                id: 'contact_person_name',
                type: "text",
            },
            {
                textFieldName: 'Sales Man Mobile',
                id: 'contact_person_mobile',
                type: "number",
            },

        ]
    }

    return (
        <Grid container justifyContent="center" sx={{ ml: 'auto' }} height="">

            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} sx={{ borderRadius: 3 }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                        {/* <FormHeader heading="Create Vendurs" /> */}

                        <Grid justifyContent="center" bgcolor="" md={11} sx={{ bgcolor: '' }}>

                            <FormHeader xs="none" md="flex" heading="Create Vendors" />

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

