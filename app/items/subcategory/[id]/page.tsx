"use client"
import { Grid } from '@mui/material';
import { message } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter, useParams } from 'next/navigation';
import React from 'react'
import CustomDropDown from '../../../../Components/CustomDropDown/CustomDropDown';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch, useQueryFetchById } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';

function page() {

    //const [categorie, setCategorie] = React.useState('');

    const router = useRouter();

    const token = useBearerToken()

    const { id } = useParams();

    const finalData = useQueryFetchById('sub-categories', id).fetchedData

    const getCategories = useQueryFetchById('categories', finalData?.category_id).fetchedData?.name

    console.log("finalData", finalData);

    console.log("getCategories-------------", getCategories);


    // const drop = finalData?.category?.name;


    const [categorie, setCategorie] = React.useState('');

    const categorieArray: { name: any; id: any; }[] = [];

    const categories = useQueryFetch('categories').fetchedData;

    categories?.map((data: any, index: any) => {

        categorieArray.push({
            name: data.name,
            id: data.id
        })

    })


    const headers = {

        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',

    };

    const formik = useFormik({

        initialValues: {

            name: finalData?.name,
            category_id: categorie

        },

        onSubmit: (values) => {

            axios.patch(`${BASE_URL}sub-categories/${finalData?.id}`, {

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

        enableReinitialize: true

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

                <Grid container bgcolor="" lg={11} px={10} mt={3} sx={{
                    borderRadius: { xs: 0, lg: 3 },
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto', pb: 10
                }}>

                    <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit}>

                        <FormHeader type="edit" heading="Edit Sub Category" />

                        <Grid container >
                            {/* drop={drop} */}
                            <CustomDropDown type="edit" drop={getCategories} fieldName="category" dropDownData={categorieArray} data={categorie} setData={setCategorie} />

                            {/* <CustomDropDown fieldName="category" dropDownData={categories} data={categorie} setData={setCategorie} /> */}

                            {

                                formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />

                                )

                            }

                        </Grid>

                    </form>

                </Grid>

            </Grid >

        </Grid >
    )
}

export default page