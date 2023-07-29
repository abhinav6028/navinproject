/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Box, Grid, TextField, Typography } from '@mui/material';
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

    const data = useQueryFetch('customers').fetchedData

    const dropDownData: { name: any; id: any; }[] = []

    data?.map((data: any, index: any) => {

        dropDownData.push({
            name: data.name,
            id: data.id,
        })

    })

    const tax = useQueryFetch('taxes').fetchedData

    const [taxType, setTaxType] = React.useState()

    const [items, setItems] = React.useState([]);

    //console.log("items", items);

   

    const formik = useFormik({

        initialValues: {

            customer_id: '',
            date: '',
            POno: '',
            total: '',
            discount: '',
            subTotal: '',
            taxAmount: '',
            paid: '',
            firmId: '',
            items: ''

        },

        onSubmit: (values) => {

            axios.post(`${BASE_URL}sales-orders`, {

                "invoiceNo": 12345,
                "date": values.date,
                "customerId": 4,
                "POno": values.POno,
                "total": values.total,
                "discount": values.discount,
                "subTotal": values.subTotal,
                "taxAmount": values.taxAmount,
                "paid": false,
                "items": items

            },

                {
                    headers
                }

            ).then((res: any) => {

                res.data.statusCode == 200 ? alert('created sccesfully') : alert('failed to create')
                router.back()

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
        {
            textFieldName: 'Tax Amount',
            id: 'taxAmount',
            name: 'taxAmount',
            type: "number",
        },
        {
            textFieldName: 'Paid',
            id: 'paid',
            name: 'paid',
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

                        <FormHeader heading="Create Customer Sale" />

                        <Grid container >

                            <CustomDropDown fieldName="Customer Name" dropDownData={dropDownData} data={customerId} setData={setCustomerId} />

                            {/* <CustomDropDown fieldName="Sub Categorie" dropDownData={subCategories} data={subCategorie} setData={setSubCategorie} /> */}

                            {

                                formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />

                                )

                            }

                            <CustomDropDown taxtType={true} fieldName="Tax Type" dropDownData={tax} data={taxType} setData={setTaxType} />

                        </Grid>

                        <ItemFormTable items={items} setItems={setItems} />

                    </form>

                   

                </Grid>

            </Grid >

        </Grid >

    )
}

export default page