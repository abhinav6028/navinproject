/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Grid, Typography, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import { BASE_URL } from '../../../../urls/urls';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import Tabs from '../../../../Components/Tabs/Tabs';
import { CustomTextField } from '../../../../Components/TextField/TextField';

function page() {
    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const { fetchedData } = useQueryFetch('categories');

    const subCategories = useQueryFetch('sub-categories').fetchedData


    console.log("subCategories", subCategories);

    const [categoryId, setCategoryId] = React.useState('');

    // console.log('categoryId', categoryId);

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategoryId(event.target.value as string);
    };

    const [subCategoryId, setSubCategoryId] = React.useState('')

    console.log('subCategoryId', subCategoryId);

    const handleChangeSubCategory = (event: SelectChangeEvent) => {
        setSubCategoryId(event.target.value as string);
    };

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
                category_id: categoryId,
                subcategory_id: subCategoryId,
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
                textFieldName: 'First Name',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Last Name',
                id: 'name',
                type: "text",
            },
            {
                textFieldName: 'Company Name',
                id: 'values.brand',
                type: "text",
            },
            {
                textFieldName: 'Customer Email',
                id: 'description',

                type: "email",
            },
            {
                textFieldName: 'Customer Phone',
                id: 'unit',
                type: "number",
            },
            {
                textFieldName: 'Website',
                id: 'tax_type',
                type: "number",
            },

        ],
        details: [
            {
                textFieldName: 'Country',
                id: 'code',
                name: 'code',
                type: "text",

            },
            {
                textFieldName: 'Address',
                id: 'name',
                name: 'name',
                type: "text",

            },
            {
                textFieldName: 'City',
                id: 'values.brand',
                name: 'brand',
                type: "text",

            },
            {
                textFieldName: 'State',
                id: 'description',
                name: 'description',
                type: "email",

            },
            {
                textFieldName: 'Zip Code',
                id: 'unit',
                name: 'unit',
                type: "number",

            },
            {
                textFieldName: 'Website',
                id: 'tax_type',
                name: 'tax_type',
                type: "number",
            },

        ],
        otherDetails: [
            {
                textFieldName: 'GST',
                id: 'code',
                name: 'code',
                type: "text",

            },
            {
                textFieldName: 'Balance',
                id: 'name',
                name: 'name',
                type: "text",

            },
        ]

    }

    const tabName = ["other Datails", "Address", "Contact Persons"]


    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: { xs: 5, md: 5, lg: 3 } }} height="">

            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} px={10} mt={3} sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto' }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Customer" />

                        <Grid container alignItems="center">

                            {formItems.main.map((data, index) =>

                                <CustomTextField key={index} data={data} formik={formik} />

                            )}

                        </Grid>

                        <Tabs formik={formik} details={formItems.details} otherDetails={formItems.otherDetails} tabName={tabName} />

                    </form>
                </Grid>

            </Grid >

        </Grid >

    )
}

export default page
