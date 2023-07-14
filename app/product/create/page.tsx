"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Grid, Typography, TextField, FormControl, InputLabel, MenuItem, Select, Box } from '@mui/material';
import { useQueryFetch } from '../../../hooks/useFetch';
import { BASE_URL } from '../../../urls/urls';
import { BackButton, SubmitButton } from '../../../Components/UI/Button/Button';
import useBearerToken from '../../../hooks/useBearerToken';
import FormHeader from '../../../Components/UI/Form/FormHeader';
import { useRouter } from 'next/navigation';


function page() {

    const router = useRouter()

    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const { fetchedData } = useQueryFetch('categories');

    const subCategories = useQueryFetch('sub-categories').fetchedData


    // console.log("subCategories", subCategories);

    const [categoryId, setCategoryId] = React.useState('');

    // console.log('categoryId', categoryId);

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategoryId(event.target.value as string);
    };

    const [subCategoryId, setSubCategoryId] = React.useState('')

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

                router.back()
                console.log('api succesfull');
                console.log(res.data.statusCode);

                res.data.statusCode == 200 ? alert('created sccesfully') : alert('failed to create')


            })

        },

    });

    const formItems = [
        {
            textFieldName: 'Code',
            id: 'code',
            name: 'code',
            type: "text",
            value: formik.values.code,
            touched: formik.touched.code,
            errors: formik.errors.code

        },
        {
            textFieldName: 'Name',
            id: 'name',
            name: 'name',
            type: "text",
            value: formik.values.name,
            touched: formik.touched.name,
            errors: formik.errors.name
        },
        {
            textFieldName: 'Brand',
            id: 'values.brand',
            name: 'brand',
            type: "text",
            value: formik.values.brand,
            touched: formik.touched.brand,
            errors: formik.errors.brand
        },
        {
            textFieldName: 'Description',
            id: 'description',
            name: 'description',
            type: "text",
            value: formik.values.description,
            touched: formik.touched.description,
            errors: formik.errors.description
        },
        {
            textFieldName: 'Unit',
            id: 'unit',
            name: 'unit',
            type: "number",
            value: formik.values.unit,
            touched: formik.touched.unit,
            errors: formik.errors.unit
        },
        {
            textFieldName: 'Tax type',
            id: 'tax_type',
            name: 'tax_type',
            type: "text",
            value: formik.values.tax_type,
            touched: formik.touched.tax_type,
            errors: formik.errors.tax_type
        },
        {
            textFieldName: 'Tax amount',
            id: 'tax_amount',
            name: 'tax_amount',
            type: "number",
            value: formik.values.tax_amount,
            touched: formik.touched.tax_amount,
            errors: formik.errors.tax_amount
        },

    ]



    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 2 }} height="">


            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} px={10} mt={3} sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto' }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Product" />


                        <Grid container>

                            <Grid lg={6} sx={{ my: 1.5 }} container >

                                <Grid alignItems="center" width={200} display="flex"  >

                                    <Typography variant='h6' fontWeight="550">Category  :</Typography>


                                </Grid>

                                <Grid sx={{ minWidth: 120 }}>

                                    <FormControl >
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>

                                        <Select sx={{ width: 400 }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={categoryId}
                                            label="Category"
                                            onChange={handleChangeCategory}
                                        >
                                            {
                                                fetchedData?.map((data: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: any) =>

                                                    <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

                                                )
                                            }

                                        </Select>
                                    </FormControl>

                                </Grid>

                            </Grid>

                            <Grid lg={6} container sx={{ my: 1.5 }}  >

                                <Grid alignItems="center" width={200} display="flex"  >

                                    <Typography variant='h6' fontWeight="550">Sub Category </Typography>
                                    <Typography variant='h6' fontWeight="550">:</Typography>

                                </Grid>

                                <Grid sx={{ minWidth: 120 }}>

                                    <FormControl >
                                        <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>

                                        <Select sx={{ width: 400 }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={subCategoryId}
                                            label="Sub Category"
                                            onChange={handleChangeSubCategory}
                                        >
                                            {
                                                subCategories?.map((data: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: any) =>

                                                    <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

                                                )
                                            }

                                        </Select>

                                    </FormControl>

                                </Grid>

                            </Grid>

                            {

                                formItems.map((data, index) =>

                                    <Grid lg={6} sx={{ my: 1.5 }} container key={index}>

                                        <Grid alignItems="center" width={200} display="flex"  >

                                            <Typography variant='h6' fontWeight="550"> {data.textFieldName}  </Typography>
                                            <Typography variant='h6' fontWeight="550">:</Typography>

                                        </Grid>

                                        <Grid bgcolor="">

                                            <TextField sx={{ width: 400 }}
                                                //variant="standard"
                                                label={data.textFieldName}
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

                    </form>
                </Grid>

            </Grid >

        </Grid >

    )
}

export default page
