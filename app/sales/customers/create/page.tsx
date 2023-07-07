"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Grid, Typography, TextField, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import { BASE_URL } from '../../../../urls/urls';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import Tabs from '../../../../Components/Tabs/Tabs';

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

    const formik = useFormik({

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

    const formItems = [
        {
            textFieldName: 'First Name',
            id: 'code',
            name: 'code',
            type: "text",
            value: formik.values.code,
            touched: formik.touched.code,
            errors: formik.errors.code

        },
        {
            textFieldName: 'Last Name',
            id: 'name',
            name: 'name',
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name
        },
        {
            textFieldName: 'Company Name',
            id: 'values.brand',
            name: 'brand',
            type: "text",
            value: formik.values.brand,
            touched: formik.touched.brand,
            errors: formik.errors.brand
        },
        {
            textFieldName: 'Customer Email',
            id: 'description',
            name: 'description',
            type: "email",
            value: formik.values.description,
            touched: formik.touched.description,
            errors: formik.errors.description
        },
        {
            textFieldName: 'Customer Phone',
            id: 'unit',
            name: 'unit',
            type: "number",
            value: formik.values.unit,
            touched: formik.touched.unit,
            errors: formik.errors.unit
        },
        {
            textFieldName: 'Website',
            id: 'tax_type',
            name: 'tax_type',
            type: "number",
            value: formik.values.tax_type,
            touched: formik.touched.tax_type,
            errors: formik.errors.tax_type
        },

    ]


    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 2 }} height="">


            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} px={10} mt={3} sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto' }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Customer" />


                        <Grid container>


                            {

                                formItems.map((data, index) =>

                                    <Grid lg={6} sx={{ my: 1.5 }} container key={index}>

                                        <Grid alignItems="center" width={200} display="flex"  >

                                            <Typography variant='h6' fontWeight="550"> {data.textFieldName}  </Typography>
                                            <Typography variant='h6' fontWeight="550">:</Typography>

                                        </Grid>

                                        <Grid bgcolor="">

                                            <TextField sx={{ width: 300 }}
                                                InputProps={{ sx: { height: 40 } }}
                                                placeholder={data.textFieldName}
                                                //variant="standard"
                                                // label={data.textFieldName}
                                                id={data.id}
                                                name={data.name}
                                                type={data.type}
                                                onChange={formik.handleChange}
                                                value={data.value}
                                                error={data.touched && Boolean(data.errors)}
                                                helperText={data.touched && data.errors}
                                                onBlur={formik.handleBlur}
                                            />

                                        </Grid>

                                    </Grid>

                                )

                            }

                        </Grid>

                        <Tabs />

                    </form>
                </Grid>

            </Grid >

        </Grid >

    )
}

export default page
