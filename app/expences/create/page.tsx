"use client"
import { Grid, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { BASE_URL } from '../../../urls/urls';
import useBearerToken from '../../../hooks/useBearerToken';
import { expeneceSchema } from '../validation';


function page() {

  //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

  const token = useBearerToken()

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

    validationSchema: expeneceSchema,

    onSubmit: values => {

      axios.post(`${BASE_URL}expences`, {

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

    <Grid container justifyContent="center">

      <Grid container justifyContent="center" bgcolor="" lg={8} px={10} mt={3}
        sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

        <form onSubmit={formik.handleSubmit}>

          {

            formItems.map((data, index) =>

              <Grid container key={index} my={3}>

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



          <Grid container justifyContent="flex-end">

            <Button type="submit" sx={{
              bgcolor: '#5dbea3',
              mb: 2,
              "&:hover": {
                backgroundColor: 'rgb(7, 177, 77, 0.42)'
              }
            }}>

              <Typography sx={{
                px: 1.5, py: 1,
                cursor: 'pointer',
                color: 'black',
              }}>CREATE</Typography>

            </Button>

          </Grid>


        </form>

      </Grid>

    </Grid>

  )
}

export default page