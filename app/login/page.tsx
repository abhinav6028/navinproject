"use client"
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React from 'react'
import { SubmitButton } from '../../Components/UI/Button/Button';
import { BASE_URL } from '../../urls/urls';
import { logInSchema } from './validation';

function page() {

  const router = useRouter()

  const formik = useFormik({

    initialValues: {

      username: '',
      password: '',

    },

    // validationSchema: logInSchema,

    onSubmit: values => {

      axios.post(`${BASE_URL}auth/login`, {

        username: values.username,
        password: values.password,

      }).then((res) => {

        Cookies.set('auth_token', res.data.accessTocken)

        console.log("res", res.data.statusCode);

        if (res.data.statusCode == 200) {
          router.push('/product')
        }

      })

    },
  });

  const formItems = [
    {
      textFieldName: 'Username',
      id: 'username',
      name: 'username',
      type: "text",
      value: formik.values.username,
      touched: formik.touched.username,
      errors: formik.errors.username

    },
    {
      textFieldName: 'password',
      id: 'password',
      name: 'password',
      type: "password",
      value: formik.values.password,
      touched: formik.touched.password,
      errors: formik.errors.password
    }

  ]

  return (
    <Grid container justifyContent="center"
      sx={{ position: 'fixed', top: "0", left: "0", zIndex: 100, height: '100vh', bgcolor: 'white' }}>

      <Grid container lg={11} >

        <Grid container justifyContent="center" alignItems="center" sx={{ bgcolor: '', mt: { xs: 0 } }} lg={6}>

          <Grid xs={12} lg={8}
            sx={{ height: '60%' }}
            component="img"
            alt="login image."
            src='assets/login/login.jpg'
          />

        </Grid>

        <Grid sx={{ zIndex: 5 }} container bgcolor="" lg={5} alignItems="center">

          <Grid container lg={7}>

            <Grid container sx={{ py: { xs: 0, lg: 24 } }}>

              <Grid container justifyContent="center" pb={5}>

                <Typography variant='h3' sx={{ fontWeight: 600, color: '#1F51FF' }}> Log In..!! </Typography>

              </Grid>

              <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                {

                  formItems.map((data, index) =>

                    <Grid key={index} container flexDirection="column" sx={{ my: 3 }}>

                      <Typography textAlign="start" sx={{}}>{data.textFieldName}</Typography>

                      <TextField sx={{ width: "100%", mt: 1 }}
                        id={data.id}
                        name={data.name}
                        type={data.type}
                        onChange={formik.handleChange}
                        value={data.value}
                        error={data.touched && Boolean(data.errors)}
                        helperText={data.touched && data.errors}
                      />

                    </Grid>

                  )

                }

                <SubmitButton>LOG IN</SubmitButton>


                <Grid container alignItems="center" justifyContent="center" >

                  <Typography textAlign="center" sx={{ cursor: 'pointer', fontWeight: 550, mt: 3 }}> Don't have an Account? </Typography>

                  <Typography onClick={() => router.push('signup')} textAlign="center" sx={{ cursor: 'pointer', fontWeight: 550, mt: 3, ml: 1, color: '#0000EE' }}>Sign Up</Typography>

                </Grid>

              </form>

            </Grid>

          </Grid>

        </Grid>

      </Grid>

    </Grid >
  )
}

export default page

