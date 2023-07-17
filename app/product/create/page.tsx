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
import { CustomTextField } from '../../../Components/TextField/TextField';


function page() {

    const router = useRouter()

    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const { fetchedData } = useQueryFetch('categories');

    const [categoryId, setCategoryId] = React.useState('');

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


    const subCategories = useQueryFetch(`sub-categories/list/${categoryId}`).fetchedData

    console.log("subCategories", subCategories)

    const formItems = [
        {
            textFieldName: 'Code',
            id: 'code',
            name: 'code',
            type: "text",
        },
        {
            textFieldName: 'Name',
            id: 'name',
            name: 'name',
            type: "text",
        },
        {
            textFieldName: 'Brand',
            id: 'values.brand',
            name: 'brand',
            type: "text",
        },
        {
            textFieldName: 'Description',
            id: 'description',
            name: 'description',
            type: "text",
        },
        {
            textFieldName: 'Unit',
            id: 'unit',
            name: 'unit',
            type: "number",
        },
        {
            textFieldName: 'Tax type',
            id: 'tax_type',
            name: 'tax_type',
            type: "text",
        },
        {
            textFieldName: 'Tax amount',
            id: 'tax_amount',
            name: 'tax_amount',
            type: "number",
        },

    ]



    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 7 }} height="">


            <Grid container >

                <Grid container bgcolor="" lg={12} px={10} mt={3} sx={{
                    borderRadius: { xs: 0, lg: 3 },
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto'
                }}>

                    <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Product" />

                        <Grid container >

                            <Grid md={6} container sx={{ my: 1.5, bgcolor: '', alignItems: 'center', justifyContent: 'center' }}  >

                                <Grid md={4} xs={12} sx={{ bgcolor: '' }} >

                                    <Typography variant='h6' fontWeight="bold" sx={{ textAlign: { md: 'end', sm: 'start' } }}> Category : </Typography>

                                </Grid>

                                <Grid md={6} xs={12} sx={{ ml: { md: 4, sm: 1 }, mt: { md: 3, sm: 1 }, bgcolor: '' }}>

                                    <FormControl sx={{ width: '100%' }} >

                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>

                                        <Select
                                            sx={{ width: { xs: '100%', md: '100%' }, height: 40 }}
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

                            <Grid md={6} container sx={{ alignItems: 'end', justifyContent: 'center' }} >

                                <Grid md={4} xs={12} sx={{ bgcolor: '' }} >

                                    <Typography variant='h6' fontWeight="bold" sx={{ textAlign: { md: 'end', sm: 'start' } }}>Sub Category :</Typography>

                                </Grid>

                                <Grid md={6} xs={12} sx={{ ml: { md: 4, sm: 1 }, mt: { md: 3, sm: 1 }, bgcolor: '' }}>

                                    <FormControl fullWidth >
                                        <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>

                                        <Select
                                            sx={{ width: { xs: '100%', md: '100%' }, height: 40 }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={subCategoryId}
                                            label="Sub Category"
                                            onChange={handleChangeSubCategory}
                                        >
                                            {/* {
                                                subCategories?.map((data: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: any) =>

                                                    <MenuItem key={index} value={data.id}>{data.name}</MenuItem>

                                                )
                                            } */}

                                        </Select>

                                    </FormControl>

                                </Grid>

                            </Grid>

                            {

                                formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />


                                    // <Grid lg={6} sx={{ my: 1.5 }} container key={index}>

                                    //     <Grid alignItems="center" width={200} display="flex"  >

                                    //         <Typography variant='h6' fontWeight="550"> {data.textFieldName}  </Typography>
                                    //         <Typography variant='h6' fontWeight="550">:</Typography>

                                    //     </Grid>

                                    //     <Grid bgcolor="">

                                    //         <TextField sx={{ width: 400 }}
                                    //             //variant="standard"
                                    //             label={data.textFieldName}
                                    //             id={data.id}
                                    //             name={data.name}
                                    //             type={data.type}
                                    //             onChange={formik.handleChange}
                                    //             value={data.value}
                                    //             error={data.touched && Boolean(data.errors)}
                                    //             helperText={data.touched && data.errors}
                                    //             onBlur={formik.handleBlur}
                                    //         />

                                    //     </Grid> 

                                    // </Grid>

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
