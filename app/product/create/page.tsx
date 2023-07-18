/* eslint-disable react-hooks/rules-of-hooks */
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
import CustomDropDown from '../../../Components/CustomDropDown/CustomDropDown';


function page() {

    const router = useRouter()

    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const [categorie, setCategorie] = React.useState('');

    const [subCategorie, setSubCategorie] = React.useState('')

    const categories = useQueryFetch('categories').fetchedData;

    const subCategories = useQueryFetch(`sub-categories/list/${categorie}`).fetchedData


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
                category_id: categorie,
                subcategory_id: subCategorie,
                tax_type: values.tax_type,
                tax_amount: values.tax_amount,

            },

                {
                    headers
                }

            ).then((res: any) => {

                router.back()
                res.data.statusCode == 200 ? alert('created sccesfully') : alert('failed to create')

            })

        },

    });

    //console.log("subCategories", subCategories)

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

                            <CustomDropDown fieldName="category" dropDownData={categories} data={categorie} setData={setCategorie} />

                            <CustomDropDown fieldName="Sub Categorie" dropDownData={subCategories} data={subCategorie} setData={setSubCategorie} />

                            {

                                formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />

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