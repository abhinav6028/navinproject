import { Typography, Grid, TextField } from '@mui/material'
import React from 'react'

export const CustomTextField = (props: any) => {

    const { data, formik } = props;

    return (


        <Grid md={6} container sx={{ alignItems: 'end', justifyContent: 'center', py: 0.5 }} >


            <Grid md={4} xs={12} sx={{}} >

                <Typography variant='h6' sx={{ textAlign: { md: 'end', sm: 'start' } }}> {data.textFieldName} : </Typography>

            </Grid>


            <Grid md={6} xs={12} sx={{ ml: { md: 4, sm: 1 }, mt: { md: 3, sm: 1 }, bgcolor: '' }}>

                <TextField
                    sx={{ width: { xs: '100%', md: '100%' } }}
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
