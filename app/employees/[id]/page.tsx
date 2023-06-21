/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter, useParams } from 'next/navigation';
import useBearerToken from '../../../hooks/useBearerToken';
import { useQueryFetchById } from '../../../hooks/useFetch';
import { BASE_URL } from '../../../urls/urls';



function page() {

  const router = useRouter();

  const { id } = useParams()

  const data = useQueryFetchById('employees', id)

  const finalData = data.fetchedData

  console.log("finalData", finalData);


  const token = useBearerToken()

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };


  const formik = useFormik({

    initialValues: {
      
      name: finalData?.name,
      code: finalData?.code,
      address: finalData?.address,
      mobile: finalData?.mobile

    },

    //validationSchema: SignUpSchema

    onSubmit: values => {

      axios.patch(`employees/${finalData?.id}`, {

        name: values.name,
        code: values.code,
        address: values.address,
        mobile: values.mobile
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
    enableReinitialize: true

  });

  const formItems = [
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
      textFieldName: 'code',
      id: 'code',
      name: 'code',
      type: "text",
      value: formik.values.code,
      touched: formik.touched.code,
      errors: formik.errors.code
    },
    {
      textFieldName: 'address',
      id: 'address',
      name: 'address',
      type: "text",
      value: formik.values.address,
      touched: formik.touched.address,
      errors: formik.errors.address
    },
    {
      textFieldName: 'mobile',
      id: 'mobile',
      name: 'mobile',
      type: "text",
      value: formik.values.mobile,
      touched: formik.touched.mobile,
      errors: formik.errors.mobile
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
                    // label={data.textFieldName}
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
              }}>UPDATE</Typography>

            </Button>

          </Grid>


        </form>

      </Grid>

    </Grid>

  )
}

export default page