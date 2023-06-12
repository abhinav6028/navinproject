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
      category_id: '',
      name: '',
      description: '',

    },

    //validationSchema: SignUpSchema

    onSubmit: values => {

      axios.post(`${API_URL}/sub-categories`, {

        category_id: values.category_id,
        name: values.name,
        description: values.description,

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
      textFieldName: 'category_id',
      id: 'category_id',
      name: 'category_id',
      type: "number",
      value: formik.values.category_id,
      touched: formik.touched.category_id,
      errors: formik.errors.category_id

    },
    {
      textFieldName: 'name',
      id: 'name',
      name: 'name',
      type: "text",
      value: formik.values.name,
      touched: formik.touched.name,
      errors: formik.errors.name
    },
    {
      textFieldName: 'description',
      id: 'description',
      name: 'description',
      type: "string",
      value: formik.values.description,
      touched: formik.touched.description,
      errors: formik.errors.description
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