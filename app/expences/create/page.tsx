"use client"
import { Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { API_URL } from '../../../urls/urls';

function page() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };


  const formik = useFormik({

    initialValues: {
      category: '',
      description: '',
      amount: '',

    },

    //validationSchema: SignUpSchema

    onSubmit: values => {

      axios.post(`${API_URL}/expences`, {

        category: values.category,
        description: values.description,
        amount: values.amount,

      },

        {
          headers
        }

      ).then((res: any) => {
        console.log('api succesfull');
        console.log(res);
      })

    },

    //validationSchema: SignUpSchema

  });

  const formItems = [
    {
      textFieldName: 'category',
      id: 'category',
      name: 'category',
      type: "text",
      value: formik.values.category,
      touched: formik.touched.category,
      errors: formik.errors.category

    },
    {
      textFieldName: 'description',
      id: 'description',
      name: 'description',
      type: "text",
      value: formik.values.description,
      touched: formik.touched.description,
      errors: formik.errors.description
    },
    {
      textFieldName: 'amount',
      id: 'amount',
      name: 'amount',
      type: "number",
      value: formik.values.amount,
      touched: formik.touched.amount,
      errors: formik.errors.amount
    },

  ]


  return (

    <Grid>

      <form onSubmit={formik.handleSubmit}>

        {

          formItems.map((data, index) =>

            <Grid key={index}>

              <label >{data.textFieldName}</label>

              <TextField
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

          )

        }

        <button type="submit">Submit</button>

      </form>

    </Grid>

  )
}

export default page