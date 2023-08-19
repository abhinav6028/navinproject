/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Divider, Grid } from '@mui/material';
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
import { expencesSchema } from '../validation';

function page() {

    const token = useBearerToken()

    const router = useRouter()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const categories = useQueryFetch('categories').fetchedData



    const [categorie, setCategorie] = React.useState('');

    console.log("data", categorie);


    const formik: any = useFormik({

        initialValues: {

            category: '',
            amount: ''

        },

        validationSchema: expencesSchema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}expences`, {

                category: categorie,
                amount: values.amount

            },

                {
                    headers
                }

            ).then((res: any) => {

                if (res.data.success) {
                    message.success(res.data.message, 1)
                    router.push('items/products')
                } else {
                    message.error(res.data.message, 1,)
                }

            })

        },

    });

    const formItems = {
        main: [
            {
                textFieldName: 'Amount',
                id: 'amount',
                type: "number",

            }
        ]


    }

    return (
        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 2 }} height="">

            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} px={10} mt={3} sx={{ borderRadius: 3, mb: 'auto' }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                        {/* <FormHeader heading="Create Expences" /> */}

                        <Grid justifyContent="center" bgcolor="" md={11} sx={{ bgcolor: '' }}>

                            <FormHeader xs="none" md="flex" heading="Create Customer" />

                        </Grid>

                        <Divider     />

                        <Grid container alignItems="center">

                            <CustomDropDown fieldName="category" dropDownData={categories} data={categorie} setData={setCategorie} />


                            {formItems.main.map((data, index) =>

                                <CustomTextField key={index} data={data} formik={formik} />

                            )}

                        </Grid>
                        <FormHeader xs="flex" md="none" />
                    </form>

                </Grid>

            </Grid >

        </Grid >
    )
}

export default page