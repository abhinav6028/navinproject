/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid } from '@mui/material';
import { message } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetchById } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';

function page() {

    const token = useBearerToken()

    const router = useRouter();

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const { id } = useParams();

    const data = useQueryFetchById('customers', id)

    const finalData = data.fetchedData

    console.log("finalData", finalData?.name);



    const formik: any = useFormik({

        initialValues: {

            // code: '',
            // name: '',
            // brand: '',
            // description: '',
            // unit: '',
            // category_id: '',
            // subcategory_id: '',
            // tax_type: '',
            // tax_amount: '',
            name: finalData?.name,
            address: finalData?.address,
            country: finalData?.country,
            state: finalData?.state,
            city: finalData?.city,
            zip: finalData?.zip,
            email: finalData?.email,
            mobile: finalData?.mobile,

        },

        //validationSchema: employeeShema,

        onSubmit: (values) => {

            axios.patch(`${BASE_URL}customers/${id}`, {

                name: values.name,
                address: values.address,
                country: values.country,
                state: values.state,
                city: values.city,
                zip: values.zip,
                email: values.email,
                mobile: values.mobile,  

            },

                {
                    headers
                }

            ).then((res: any) => {
                if (res.data.success) {
                    message.success(res.data.message, 1, router.back())
                } else {
                    message.error(res.data.message, 1,)
                }
            })

        },

        enableReinitialize: true

    });

    const formItems = {
        main: [
            {
                textFieldName: 'Customer Name',
                id: 'name',
                type: "text",

            },
            {
                textFieldName: 'Address',
                id: 'address',
                type: "text",

            },
            {
                textFieldName: 'Country',
                id: 'country',
                type: "text",
            },
            {
                textFieldName: 'State',
                id: 'state',
                type: "text",
            },
            {
                textFieldName: 'city',
                id: 'city',
                type: "text",
            },
            {
                textFieldName: 'Pin Code',
                id: 'zip',
                type: "text",
            },
            {
                textFieldName: 'Email',
                id: 'email',
                type: "email",
            },
            {
                textFieldName: 'Mobile',
                id: 'mobile',
                type: "number",
            },

        ],
        // details: [
        //     {
        //         textFieldName: 'Country',
        //         id: 'code',
        //         name: 'code',
        //         type: "text",

        //     },
        //     {
        //         textFieldName: 'Address',
        //         id: 'name',
        //         name: 'name',
        //         type: "text",

        //     },
        //     {
        //         textFieldName: 'City',
        //         id: 'values.brand',
        //         name: 'brand',
        //         type: "text",

        //     },
        //     {
        //         textFieldName: 'State',
        //         id: 'description',
        //         name: 'description',
        //         type: "email",

        //     },
        //     {
        //         textFieldName: 'Zip Code',
        //         id: 'unit',
        //         name: 'unit',
        //         type: "number",

        //     },
        //     {
        //         textFieldName: 'Website',
        //         id: 'tax_type',
        //         name: 'tax_type',
        //         type: "number",
        //     },

        // ],
        // otherDetails: [
        //     {
        //         textFieldName: 'GST',
        //         id: 'code',
        //         name: 'code',
        //         type: "text",

        //     },
        //     {
        //         textFieldName: 'Balance',
        //         id: 'name',
        //         name: 'name',
        //         type: "text",

        //     },
        //]

    }

    const tabName = ["other Datails", "Address", "Contact Persons"]


    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', pb: 10, mt: { xs: 5, md: 5, lg: 3 } }} height="">

            <Grid container justifyContent="center">

                <Grid justifyContent="center" bgcolor="" lg={11} px={10} mt={3} sx={{ borderRadius: 3, boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto' }}>

                    <form style={{ width: '100%' }} onSubmit={formik.handleSubmit}>

                        <FormHeader type="edit" heading="Edit Customer" />

                        <Grid container alignItems="center">

                            {formItems.main.map((data, index) =>

                                <CustomTextField key={index} data={data} formik={formik} />

                            )}

                        </Grid>

                        {/* <Tabs formik={formik} details={formItems.details} otherDetails={formItems.otherDetails} tabName={tabName} /> */}

                    </form>
                </Grid>

            </Grid >

        </Grid >

    )
}

export default page
