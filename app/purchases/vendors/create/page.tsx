/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import VendorTab from '../../../../Components/Vendore/VendorTab';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';

function page() {

    const token = useBearerToken()

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

        //validationSchema: employeeShema,

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
                console.log('api succesfull');
                console.log(res);
            })

        },

    });

    const formItems = {
        main: [
            {
                textFieldName: 'company_name',
                id: 'company_name',
                type: "text",

            },
            {
                textFieldName: 'address',
                id: 'address',
                type: "text",
            },
            {
                textFieldName: 'mobile',
                id: 'mobile',
                type: "number",
            },
            {
                textFieldName: 'email',
                id: 'email',
                type: "email",
            },
            {
                textFieldName: 'tax_type',
                id: 'tax_type',
                type: "text",
            },
            {
                textFieldName: 'tax_no',
                id: 'tax_no',
                type: "text",
            },
            {
                textFieldName: 'contact_person_name',
                id: 'contact_person_name',
                type: "text",
            },
            {
                textFieldName: 'contact_person_mobile',
                id: 'contact_person_mobile',
                type: "number",
            },

        ]
    }

    return (
        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 2 }} height="">

            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} px={10} mt={3} sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto' }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Vendurs" />

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

