/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid,Divider } from '@mui/material';
import { message } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react'
import CustomDropDown from '../../../../Components/CustomDropDown/CustomDropDown';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';

function page() {

    const [categorie, setCategorie] = React.useState(0);

    const router = useRouter()

    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const categories = useQueryFetch('categories').fetchedData;

    console.log("categorie", categorie);

    const formik = useFormik({

        initialValues: {

            name: '',
            category_id: ''

        },

        onSubmit: (values) => {

            axios.post(`${BASE_URL}sub-categories`, {

                name: values.name,
                category_id: categorie

            },

                {
                    headers
                }

            ).then((res: any) => {

                if (res.data.success) {
                    message.success(res.data.message, 1)
                    router.back()
                } else {
                    message.error(res.data.message, 1,)
                }

            })

        },

    });

    const formItems = [
        {
            textFieldName: 'Sub Category',
            id: 'name',
            type: "text",

        },

    ]

    return (
        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 7, }} height="">


            <Grid container justifyContent="center" >

                <Grid container bgcolor="" lg={11} sx={{
                    borderRadius: { xs: 0, lg: 3 },
                }}>

                    <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit}>

                        {/* <FormHeader heading="Create Sub Category" /> */}

                        <Grid justifyContent="center" bgcolor="" md={11} sx={{ bgcolor: '' }}>

                            <FormHeader xs="none" md="flex" heading="Create Sub Categories" />

                        </Grid>

                        <Divider />

                        <Grid container >

                            <CustomDropDown fieldName="category" dropDownData={categories} data={categorie} setData={setCategorie} />

                            {

                                formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />

                                )

                            }

                        </Grid>

                        <FormHeader xs="flex" md="none" />

                    </form>

                </Grid>

            </Grid >

        </Grid >

    )
}

export default page