"use client"
import { Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter, useParams } from 'next/navigation';
import useBearerToken from '../../../hooks/useBearerToken';
import { useQueryFetchById } from '../../../hooks/useFetch';

export default function CreateProduct() {

    const router = useRouter();

    const { id } = useParams()

    const data = useQueryFetchById('categories', id)

    const finalData = data.fetchedData

    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const formik = useFormik({

        initialValues: {

            category: finalData?.name,
            description: finalData?.description,

        },

        //validationSchema: SignUpSchema

        onSubmit: values => {

            axios.patch(`/categories/${id}`, {

                category: values.category,
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
        enableReinitialize: true


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

    ]


    return (

        <Grid container justifyContent="center">

            <Grid item container justifyContent="center" bgcolor="" lg={8} px={10} mt={3}
                sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>

                <form onSubmit={formik.handleSubmit}>

                    {

                        formItems.map((data, index) =>

                            <Grid container key={index} my={3}>

                                <Grid item alignItems="center" width={200} display="flex"  >

                                    <Typography variant='h6' fontWeight="550"> {data.textFieldName}  </Typography>
                                    <Typography variant='h6' fontWeight="550">:</Typography>

                                </Grid>

                                <Grid item bgcolor="">

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