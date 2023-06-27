"use client"
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React from 'react'
import { SubmitButton } from '../../Components/UI/Button/Button';
import { BASE_URL } from '../../urls/urls';

function page() {

  const router = useRouter()

  const formik = useFormik({

    initialValues: {

      username: '',
      password: '',

    },

    //validationSchema: logInSchema,

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
      textFieldName: 'USER NAME',
      id: 'username',
      name: 'username',
      type: "text",
      value: formik.values.username,
      touched: formik.touched.username,
      errors: formik.errors.username

    },
    {
      textFieldName: 'PASSWORD',
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

        <Grid container bgcolor="" justifyContent="center" alignItems="center" lg={6}>


          <Grid lg={10}
            sx={{ height: '80%' }}
            component="img"
            alt="The house from the offer."
            src='assets/login/login.jpg'
          />

          {/* <img src='/public/assets/login/login.jpg' alt="" /> */}

        </Grid>

        <Grid container bgcolor="" lg={6} alignItems="center">

          <Grid container lg={7}>

            <Grid container sx={{ py: 24 }}>

              <Grid container justifyContent="center" pb={5}>

                <Typography variant='h3' sx={{ fontWeight: 600, color: '#1F51FF' }}> Log In..!! </Typography>

              </Grid>

              <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                {

                  formItems.map((data, index) =>

                    <Grid key={index} container justifyContent="space-evently" alignItems="center" sx={{ my: 3 }}>

                      <Grid container justifyContent="center" lg={4} bgcolor="" >

                        {/* <label ></label> */}
                        <Typography variant='h6' sx={{ fontWeight: 600 }}>{data.textFieldName}</Typography>

                      </Grid>


                      <Grid bgcolor="">
                        <TextField sx={{ width: 300 }}
                          id={data.id}
                          name={data.name}
                          type={data.type}
                          onChange={formik.handleChange}
                          value={data.value}
                          error={data.touched && Boolean(data.errors)}
                          helperText={data.touched && data.errors}
                        />
                      </Grid>

                    </Grid>

                  )

                }

                <SubmitButton>LOG IN</SubmitButton>

                <Grid container alignItems="center" justifyContent="center" >

                  <Typography textAlign="center" sx={{ cursor: 'pointer', fontWeight: 550, mt: 1 }}>Don't have an Account?</Typography>

                  <Typography onClick={() => router.push('signup')} textAlign="center" sx={{ cursor: 'pointer', fontWeight: 550, mt: 1, ml: 1, color: '#0000EE' }}>Sign Up</Typography>

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













// /* eslint-disable react-hooks/rules-of-hooks */
// "use client"
// import { Grid, TextField } from '@mui/material'
// import axios from 'axios';
// import React from 'react';
// import { BASE_URL } from '../../urls/urls';
// import Cookies from 'js-cookie';
// import { useFormik } from 'formik';
// import { logInSchema } from './validation';
// import { useRouter } from 'next/navigation';


// function page() {

  // const router = useRouter()

  // const formik = useFormik({

  //   initialValues: {

  //     username: '',
  //     password: '',

  //   },

  //   //validationSchema: logInSchema,

  //   onSubmit: values => {

  //     axios.post(`${BASE_URL}auth/login`, {

  //       username: values.username,const router = useRouter()

  // const formik = useFormik({

  //   initialValues: {

  //     username: '',
  //     password: '',

  //   },

  //   //validationSchema: logInSchema,

  //   onSubmit: values => {

  //     axios.post(`${BASE_URL}auth/login`, {

  //       username: values.username,
  //       password: values.password,

  //     }).then((res) => {

  //       Cookies.set('auth_token', res.data.accessTocken)

  //       console.log("res", res.data.const router = useRouter()

  // const formik = useFormik({

  //   initialValues: {

  //     username: '',
  //     password: '',

  //   },

  //   //validationSchema: logInSchema,

  //   onSubmit: values => {

  //     axios.post(`${BASE_URL}auth/login`, {

  //       username: values.username,
  //       password: values.password,

  //     }).then((res) => {

  //       Cookies.set('auth_token', res.data.accessTocken)

  //       console.log("res", res.data.statusCode);

  //       if (res.data.statusCode == 200) {
  //         router.push('/product')
  //       }

  //     })

  //   },
  // });

  // const formItems = [
  //   {
  //     textFieldName: 'USER NAME',
  //     id: 'username',
  //     name: 'username',
  //     type: "text",
  //     value: formik.values.username,
  //     touched: formik.touched.username,
  //     errors: formik.errors.username

  //   },
  //   {
  //     textFieldName: 'password',
  //     id: 'password',
  //     name: 'password',
  //     type: "password",
  //     value: formik.values.password,
  //     touched: formik.touched.password,
  //     errors: formik.errors.password
  //   }

  // ]
  //       }

  //     })

  //   },
  // });

  // const formItems = [
  //   {
  //     textFieldName: 'USER NAME',
  //     id: 'username',
  //     name: 'username',
  //     type: "text",
  //     value: formik.values.username,
  //     touched: formik.touched.username,
  //     errors: formik.errors.username

  //   },
  //   {
  //     textFieldName: 'password',
  //     id: 'password',
  //     name: 'password',
  //     type: "password",
  //     value: formik.values.password,
  //     touched: formik.touched.password,
  //     errors: formik.errors.password
  //   }

  // ]
  //     password: '',

  //   },

  //   //validationSchema: logInSchema,
  // const router = useRouter()

  // const formik = useFormik({

  //   initialValues: {

  //     username: '',
  //     password: '',

  //   },

  //   //validationSchema: logInSchema,

  //   onSubmit: values => {

  //     axios.post(`${BASE_URL}auth/login`, {

  //       username: values.username,
  //       password: values.password,

  //     }).then((res) => {

  //       Cookies.set('auth_token', res.data.accessTocken)

  //       console.log("res", res.data.statusCode);
  // const router = useRouter()

  // const formik = useFormik({

  //   initialValues: {

  //     username: '',
  //     password: '',

  //   },

  //   //validationSchema: logInSchema,

  //   onSubmit: values => {

  //     axios.post(`${BASE_URL}auth/login`, {

  //       username: values.username,
  //       password: values.password,

  //     }).then((res) => {const router = useRouter()

  // const formik = useFormik({

  //   initialValues: {

  //     username: '',
  //     password: '',

  //   },

  //   //validationSchema: logInSchema,

  //   onSubmit: values => {

  //     axios.post(`${BASE_URL}auth/login`, {

  //       username: values.username,
  //       password: values.password,

  //     }).then((res) => {

  //       Cookies.set('auth_token', res.data.accessTocken)

  //       console.log("res", res.data.statusCode);

  //       if (res.data.statusCode == 200) {
  //         router.push('/product')
  //       }

  //     })

  //   },
  // });

  // const formItems = [
  //   {
  //     textFieldName: 'USER NAME',
  //     id: 'username',
  //     name: 'username',
  //     type: "text",
  //     value: formik.values.username,
  //     touched: formik.touched.username,
  //     errors: formik.errors.username

  //   },
  //   {
  //     textFieldName: 'password',
  //     id: 'password',
  //     name: 'password',
  //     type: "password",
  //     value: formik.values.password,
  //     touched: formik.touched.password,
  //     errors: formik.errors.password
  //   }

  // ]
  //       console.log("res", res.data.statusCode);

  //       if (res.data.statusCode == 200) {
  //         router.push('/product')
  //       }

  //     })

  //   },
  // });

  // const formItems = [
  //   {
  //     textFieldName: 'USER NAME',
  //     id: 'username',
  //     name: 'username',
  //     type: "text",
  //     value: formik.values.username,
  //     touched: formik.touched.username,
  //     errors: formik.errors.username

  //   },
  //   {
  //     textFieldName: 'password',
  //     id: 'password',
  //     name: 'password',
  //     type: "password",
  //     value: formik.values.password,
  //     touched: formik.touched.password,
  //     errors: formik.errors.password
  //   }

  // ]

  //     })

  //   },
  // });

  // const formItems = [
  //   {
  //     textFieldName: 'USER NAME',
  //     id: 'username',
  //     name: 'username',
  //     type: "text",
  //     value: formik.values.username,
  //     touched: formik.touched.username,
  //     errors: formik.errors.username

  //   },
  //   {
  //     textFieldName: 'password',
  //     id: 'password',
  //     name: 'password',
  //     type: "password",
  //     value: formik.values.password,
  //     touched: formik.touched.password,
  //     errors: formik.errors.password
  //   }

  // ]
  //   onSubmit: values => {

  //     axios.post(`${BASE_URL}auth/login`, {

  //       username: values.username,
  //       password: values.password,

  //     }).then((res) => {

  //       Cookies.set('auth_token', res.data.accessTocken)

  //       console.log("res", res.data.statusCode);

  //       if (res.data.statusCode == 200) {
  //         router.push('/product')
  //       }

  //     })

  //   },
  // });

  // const formItems = [
  //   {
  //     textFieldName: 'USER NAME',
  //     id: 'username',
  //     name: 'username',
  //     type: "text",
  //     value: formik.values.username,
  //     touched: formik.touched.username,
  //     errors: formik.errors.username

  //   },
  //   {
  //     textFieldName: 'password',
  //     id: 'password',
  //     name: 'password',
  //     type: "password",
  //     value: formik.values.password,
  //     touched: formik.touched.password,
  //     errors: formik.errors.password
  //   }

  // ]statusCode);

  //       if (res.data.statusCode == 200) {
  //         router.push('/product')
  //       }

  //     })

  //   },
  // });

  // const formItems = [
  //   {
  //     textFieldName: 'USER NAME',
  //     id: 'username',
  //     name: 'username',
  //     type: "text",
  //     value: formik.values.username,
  //     touched: formik.touched.username,
  //     errors: formik.errors.username

  //   },
  //   {
  //     textFieldName: 'password',
  //     id: 'password',
  //     name: 'password',
  //     type: "password",
  //     value: formik.values.password,
  //     touched: formik.touched.password,
  //     errors: formik.errors.password
  //   }

  // ]


//   return (

    // <Grid>

    //   <form onSubmit={formik.handleSubmit}>

    //     {

    //       formItems.map((data, index) =>

    //         <Grid key={index}>

    //           <label >{data.textFieldName}</label>

    //           <TextField
    //             id={data.id}
    //             name={data.name}
    //             type={data.type}
    //             onChange={formik.handleChange}
    //             ///value={data.value}
    //             value={data.value}
    //             error={data.touched && Boolean(data.errors)}
    //             helperText={data.touched && data.errors}
    //           />

    //         </Grid>

    //       )

    //     }

    //     <button type="submit">Submit</button>

    //   </form>

    // </Grid>

//   )
// }

// export default page