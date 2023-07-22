/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Grid, TextField, Typography } from '@mui/material';
import CustomDropDown from '../../../../Components/CustomDropDown/CustomDropDown';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';
import { useRouter } from 'next/navigation';
import ItemFormTable from '../../../../Components/ItemFormTable/ItemFormTable';


function page() {

    const router = useRouter()

    const token = useBearerToken()

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const [customerId, setCustomerId] = React.useState('');

    const customers = useQueryFetch('customers').fetchedData

    const taxId = useQueryFetch('taxes').fetchedData

    console.log("customerId", taxId);

    const [items, setItems] = React.useState([])

    const [taxType, setTaxType] = React.useState()

    console.log("items///////////", items);



    // const [data, setData] = React.useState([])


    const formik = useFormik({

        initialValues: {

            customer_id: '',
            date: '',
            POno: '',
            total: '',
            discount: '',
            subTotal: '',
            //taxId: '',
            taxAmount: '',
            grandTotal: '',
            paid: '',
            firmId: '',
            items: ''

        },

        //validationSchema: productSchema,

        onSubmit: (values) => {

            axios.post(`${BASE_URL}sales-orders`, {

                customer_id: customerId,
                date: values.date,
                POno: values.POno,
                total: values.total,
                discount: values.discount,
                subTotal: values.subTotal,
                //taxId: values.taxId,
                taxAmount: values.taxAmount,
                grandTotal: values.grandTotal,
                paid: values.paid,
                //firmId: values.firmId,
                items: items

            },

                {
                    headers
                }

            ).then((res: any) => {

                // res.data.statusCode == 200 ? alert('created sccesfully') : alert('failed to create')
                // router.back()

            })

        },

    });



    const formItems = [
        {
            textFieldName: 'Date',
            id: 'date',
            name: 'date',
            type: "date",
        },
        {
            textFieldName: 'POno',
            id: 'POno',
            name: 'POno',
            type: "text",
        },
        {
            textFieldName: 'Total',
            id: 'total',
            name: 'total',
            type: "number",
        },
        {
            textFieldName: 'Discount',
            id: 'discount',
            name: 'discount',
            type: "number",
        },
        {
            textFieldName: 'SubTotal',
            id: 'subTotal',
            name: 'subTotal',
            type: "number",
        },
        // {
        //     textFieldName: 'taxId',
        //     id: 'taxId',
        //     name: 'taxId',
        //     type: "number",
        // },
        {
            textFieldName: 'taxAmount',
            id: 'taxAmount',
            name: 'taxAmount',
            type: "number",
        },
        {
            textFieldName: 'Grand Total',
            id: 'grand_total',
            name: 'grand_total',
            type: "number",
        },
        {
            textFieldName: 'paid',
            id: 'paid',
            name: 'paid',
            type: "text",
        },
        // {
        //     textFieldName: 'firmId',
        //     id: 'firmId',
        //     name: 'firmId',
        //     type: "number",
        // },

    ]

    return (

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: 7, }} height="">


            <Grid container justifyContent="center" >

                <Grid container bgcolor="" lg={11} px={10} mt={3} sx={{
                    borderRadius: { xs: 0, lg: 3 },
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", mb: 'auto', pb: 10
                }}>

                    <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit}>

                        <FormHeader heading="Create Customer Sale" />

                        <Grid container >

                            <CustomDropDown fieldName="Customer Name" dropDownData={customers} data={customerId} setData={setCustomerId} />

                            {/* <CustomDropDown fieldName="Sub Categorie" dropDownData={subCategories} data={subCategorie} setData={setSubCategorie} /> */}

                            {

                                formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />

                                )

                            }

                            {/* <CustomDropDown fieldName="Customer Name" dropDownData={taxId} data={taxType} setData={setTaxType} /> */}


                        </Grid>

                        <ItemFormTable items={items} setItems={setItems} />

                    </form>

                </Grid>

            </Grid >

        </Grid >

    )
}

export default page