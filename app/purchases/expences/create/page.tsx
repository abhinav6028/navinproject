"use client"
import { Grid } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
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
                textFieldName: 'Amount',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Paid Through',
                id: 'name',
                type: "text",
            },
            {
                textFieldName: 'Vendor',
                id: 'values.brand',
                type: "email",
            },
            {
                textFieldName: 'Gst Treatment',
                id: 'description',
                type: "number",
            },
            {
                textFieldName: 'Destination Of Supply',
                id: 'unit',
                type: "text",
            },
            {
                textFieldName: 'Tax',
                id: 'tax_type',
                type: "text",
            },
            {
                textFieldName: 'Invoices',
                id: 'tax_type',
                type: "text",
            },
            {
                textFieldName: 'Customer Name',
                id: 'tax_type',
                type: "text",
            },

        ],
        otherDetails: [
            {
                textFieldName: 'GST Treatment',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Source Of Supply',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Currency',
                id: 'code',
                type: "text",

            }, {
                textFieldName: 'Opening Balanace',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'TDS',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Price List',
                id: 'code',
                type: "text",

            },

        ],
        address: [
            {
                textFieldName: 'Country',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Address',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'City',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'State',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Zip Code',
                id: 'code',
                type: "number",

            },
            {
                textFieldName: 'Phone',
                id: 'code',
                type: "number",

            },
            {
                textFieldName: 'FAX',
                id: 'code',
                type: "text",

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