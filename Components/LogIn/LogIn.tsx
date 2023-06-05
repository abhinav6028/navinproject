import { Grid, TextField } from '@mui/material'
import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { API_URL } from '../../urls/urls';

export default function LogIn() {

    const formik = useFormik({

        initialValues: {
            username: '',
            password: '',

        },

        onSubmit: values => {

            axios.post(`${API_URL}/auth/login`, {

                username: values.username,
                taglin: values.password,

            }).then((res) => {
                alert('working');
                console.log('api succesfull');
                console.log(res);
            })

            //alert(JSON.stringify(values, null, 2));
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
                                ///value={data.value}
                                value={data.value}
                                error={data.touched && Boolean(data.errors)}
                                helperText={data.touched && data.errors}
                            />

                        </Grid>

                    )

                }

                <button type="submit">Submit</button>

            </form>

        </Grid>

    )
}


