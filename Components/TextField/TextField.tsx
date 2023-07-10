import { Typography, Grid, TextField } from '@mui/material'
import React from 'react'

export const CustomTextField = (props: any) => {

    const { data, formik } = props;

    return (


        <Grid md={5} container alignItems="end">


            <Grid md={4} sx={{ bgcolor: '' }} >

                <Typography variant='h6' fontWeight="bold" textAlign="end"> {data.textFieldName} : </Typography>

            </Grid>


            <Grid md={6} sx={{ ml: 4, mt: 2, bgcolor: '' }}>

                <TextField
                    sx={{ width: '100%' }}
                    InputProps={{ sx: { height: 40 } }}
                    
                    placeholder={data.textFieldName}
                    id={data.id}
                    name={data.id}
                    type={data.type}
                    onChange={formik.handleChange}
                    value={formik.values[data.id]}
                    error={formik.touched[data.id] && Boolean(formik.errors[data.id])}
                    helperText={formik.touched[data.id] && formik.errors[data.id]}
                    onBlur={formik.handleBlur}
                />

            </Grid>

        </Grid>


    )
}
