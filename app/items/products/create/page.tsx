/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Grid, Divider } from '@mui/material';
import CustomDropDown from '../../../../Components/CustomDropDown/CustomDropDown';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';
import { useRouter } from 'next/navigation';
import { productSchema } from '../validation';
import { Button, message } from 'antd';



function page() {

  const router = useRouter()

  const token = useBearerToken()

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  const [categorie, setCategorie] = React.useState(0);

  const [subCategorie, setSubCategorie] = React.useState(0)

  const categories = useQueryFetch('categories').fetchedData;

  const subCategories = useQueryFetch(`sub-categories/list/${categorie}`).fetchedData

  const formik = useFormik({

    initialValues: {

      code: '',
      name: '',
      brand: '',
      description: '',
      unit: '',
      unit_price: '',
      category_id: '',
      subcategory_id: '',
      tax_type: '',
      tax_amount: '',

    },

    validationSchema: productSchema,

    onSubmit: (values) => {

      axios.post(`${BASE_URL}products`, {

        "code": values.code,
        "name": values.name,
        "brand": values.brand,
        "description": values.brand,
        "unit": values.unit,
        unit_price: values.unit_price,
        category_id: 12,
        subcategory_id: 11,
        "tax_type": values.tax_type,
        "tax_amount": values.tax_amount,

      },

        {
          headers
        }

      ).then((res: any) => {

        if (res.data.success) {
          message.success(res.data.message, 1)
          router.back()
        } else {
          message.error(res.data.message, 1,)
        }

      })

    },

  });



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
      id: 'brand',
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
      textFieldName: 'Unit Price',
      id: 'unit_price',
      name: 'unit_price',
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

    <Grid container justifyContent="center" sx={{ ml: 'auto' }} height="">


      <Grid container justifyContent="center" >

        <Grid container bgcolor="" lg={11} sx={{
          borderRadius: { xs: 0, lg: 3 },
        }}>

          <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit}>

            {/* <FormHeader heading="Create Product" /> */}

            <Grid justifyContent="center" bgcolor="" md={11} sx={{ bgcolor: '' }}>

              <FormHeader xs="none" md="flex" heading="Create Product" />

            </Grid>

            <Divider />

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