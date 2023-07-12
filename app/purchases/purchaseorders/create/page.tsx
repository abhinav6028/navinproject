/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import CustomeForm from '../../../../Components/CustomeForm/CustomeForm';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
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

            code: '',
            name: '',
            brand: '',
            description: '',
            unit: '',
            category_id: '',
            subcategory_id: '',
            tax_type: '',
            tax_amount: '',

        },

        //validationSchema: employeeShema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}products`, {

                code: values.code,
                name: values.name,
                brand: values.name,
                description: values.description,
                unit: values.unit,
                tax_type: values.tax_type,
                tax_amount: values.tax_amount,

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
                textFieldName: 'Vendor Name',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Deliver To',
                id: 'name',
                type: "text",
            },
            {
                textFieldName: 'Purchase Order',
                id: 'values.brand',
                type: "email",
            },
            {
                textFieldName: 'Reference',
                id: 'description',
                type: "number",
            },
            {
                textFieldName: 'Date',
                id: 'unit',
                type: "text",
            },
            {
                textFieldName: 'Expected Delivery Date',
                id: 'tax_type',
                type: "text",
            },
            {
                textFieldName: 'Payment Terms',
                id: 'tax_type',
                type: "text",
            },

            {
                textFieldName: 'Shipment Preference',
                id: 'tax_type',
                type: "text",
            },

        ],

    }

    return (
        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 2 }} height="">

            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" px={10} mt={3} sx={{ borderRadius: 3 }} >

                    <CustomeForm
                        data={formItems.main}
                        formik={formik}
                        heading="New Purchase Order"
                    />

                </Grid>

            </Grid >

        </Grid >
    )
}

export default page