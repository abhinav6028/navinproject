"use client"

import { Grid, TextField, Typography } from '@mui/material'
import { message } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React from 'react'
import { PrimaryButton } from '../../Components/UI/Button/Button';
import { BASE_URL } from '../../urls/urls';
import Image from 'next/image';
import { PRIMARY_COLOUR } from '../../urls/colours';

function page() {

  const router = useRouter()

  const formik: any = useFormik({

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

        if (res.data.success) {

          message.success(res.data.message, 1)

          router.push('items/products')

        } else {
          message.error(res.data.message, 1,)
        }

      })

    },
  });

  const formItems = [
    {
      textFieldName: 'Username',
      name: 'username',
      type: "text",
    },
    {
      textFieldName: 'password',
      name: 'password',
      type: "password",
    }
  ]

  return (
    <Grid container justifyContent="center"
      sx={{
        position: 'fixed', top: "0", left: "0",
        zIndex: 100, height: '100vh', bgcolor: 'white'
      }}>

      <Grid container md={10} >

        <Grid sx={{ bgcolor: "" }} container justifyContent="start" alignItems="center" md={6}>

          <Image src={'/assets/login/login.webp'}
            alt="ourteam-oyvaa"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', padding: "10px" }} // optional
          />

        </Grid>

        <Grid container md={6} justifyContent="end" alignItems="center">

          <Grid container xs={12} md={9} justifyContent="start"
            alignItems="center" sx={{ height: "fit-content", bgcolor: "", p: 1 }}>

            <Typography variant='h4' sx={{ fontWeight: 600, color: 'black' }}> Log In..!! </Typography>

            <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

              {formItems.map((data, index) =>

                <Grid key={index} container flexDirection="column" sx={{ my: 3 }}>

                  <Typography textAlign="start" fontWeight="semibold"
                    textTransform="capitalize">{data.textFieldName}</Typography>

                  <TextField size='small' sx={{ width: "100%", mt: 1 }}
                    id={data.name}
                    name={data.name}
                    type={data.type}
                    onChange={formik.handleChange}
                    value={formik.values[data.name]}
                    error={formik.touched[data.name] && Boolean(formik.errors[data.name])}
                    helperText={formik.touched[data.name] && formik.errors[data.name]}
                  />

                </Grid>

              )}

              <PrimaryButton width="100%" bgcolor={PRIMARY_COLOUR} mt={1}>Sign In</PrimaryButton>


              <Grid container alignItems="center" justifyContent="center" >

                <Typography textAlign="center"
                  sx={{ cursor: 'pointer', fontWeight: "normal", mt: 3 }}> Don't have an Account? </Typography>

                <Typography onClick={() => router.push('signup')} textAlign="center"
                  sx={{ cursor: 'pointer', fontWeight: 550, mt: 3, ml: 1, color: 'dodgerblue' }}>Sign Up</Typography>

              </Grid>

            </form>

          </Grid>

        </Grid>

      </Grid>

    </Grid >
  )
}

export default page

