/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Grid, Typography, TextField } from '@mui/material';
import { BASE_URL } from '../../../../urls/urls';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import CustomDropDown from '../../../../Components/CustomDropDown/CustomDropDown';
import Link from 'next/link'


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
                textFieldName: 'Sales Order',
                id: 'code',
                type: "text",

            },
            {
                textFieldName: 'Reference',
                id: 'name',
                type: "text",
            },
            {
                textFieldName: 'Sales Order Date',
                id: 'values.brand',
                type: "date",
            },
            {
                textFieldName: 'Shipment Date',
                id: 'description',
                type: "date",
            },
            {
                textFieldName: 'Payment Terms',
                id: 'unit',
                type: "number",
            },
            {
                textFieldName: 'Website',
                id: 'tax_type',
                type: "number",
            },

        ],


    }

    const tabName = ["other Datails", "Address", "Contact Persons"]

    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 2 }} height="">


            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} px={10} mt={3} sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto' }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Customer" />

                        <Grid container alignItems="center">

                            <CustomDropDown fieldName="Customer Name" />

                        </Grid>

                        <Grid container sx={{ mt: 4 }}>
                            {formItems.main.map((data, index) =>

                                <CustomTextField key={index} data={data} formik={formik} />

                            )}
                        </Grid>

                        <Grid alignItems="center" sx={{ mt: 5 }}>

                            <CustomDropDown fieldName="Delevery Method" />

                            <CustomDropDown fieldName="Salesperson" />

                        </Grid>


                        <Grid container sx={{ justifyContent: 'end' }}>

                            <Grid lg={5} container sx={{ mt: 4, bgcolor: "#D9D9D9", borderRadius: 1, alignItems: 'center', justifyContent: 'center' }}>

                                <Grid container lg={11} sx={{ my: 1 }}>

                                    <Grid container sx={{ justifyContent: 'space-between', my: '' }}>

                                        <Typography>Sub Total</Typography>

                                        <Typography>0.000</Typography>

                                    </Grid>

                                    <Grid container sx={{ bgcolor: '', mt: 1, justifyContent: 'space-between', alignItems: 'center' }}  >

                                        <Grid md={7} bgcolor="" sx={{ justifyContent: 'space-between' }} container>
                                            <Typography>Shipping Charges </Typography>

                                            <Grid container lg={5} sx={{ bgcolor: '', justifyContent: 'space-between' }}>
                                                <TextField
                                                    sx={{ width: '90%' }}
                                                    InputProps={{ sx: { height: 30 } }}
                                                    id="outlined-basic"
                                                />
                                            </Grid>
                                        </Grid>

                                        <Typography>0.000</Typography>

                                    </Grid>

                                    <Grid container sx={{ bgcolor: '', mt: 1, justifyContent: 'space-between', alignItems: 'center' }}  >

                                        <Grid md={7} bgcolor="" sx={{ justifyContent: 'space-between' }} container>
                                            <Typography>Adjustments</Typography>

                                            <Grid container lg={5} sx={{ bgcolor: '', justifyContent: 'space-between' }}>
                                                <TextField
                                                    sx={{ width: '90%' }}
                                                    InputProps={{ sx: { height: 30 } }}
                                                    id="outlined-basic"
                                                />
                                            </Grid>
                                        </Grid>

                                        <Typography>0.000</Typography>

                                    </Grid>

                                    <Grid container sx={{ justifyContent: 'space-between', my: 1 }}>

                                        <Typography sx={{ fontWeight: '700' }}>Total (₹)</Typography>

                                        <Typography sx={{ fontWeight: '700' }}>0.000</Typography>

                                    </Grid>

                                </Grid>

                            </Grid>

                        </Grid>

                    </form>
                </Grid>

            </Grid >



        </Grid >

    )
}

export default page