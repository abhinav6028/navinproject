/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Box, Divider, Grid, TextField, Typography } from '@mui/material';
import CustomDropDown from '../../../../Components/CustomDropDown/CustomDropDown';
import { CustomTextField } from '../../../../Components/TextField/TextField';
import FormHeader from '../../../../Components/UI/Form/FormHeader';
import useBearerToken from '../../../../hooks/useBearerToken';
import { useQueryFetch } from '../../../../hooks/useFetch';
import { BASE_URL } from '../../../../urls/urls';
import { useRouter } from 'next/navigation';
import ItemFormTable from '../../../../Components/ItemFormTable/ItemFormTable';
import { message } from 'antd';
import { log } from 'console';


function page() {

    const router = useRouter()

    const token = useBearerToken()

    const [taxType, setTaxType] = React.useState(0)

    const [items, setItems] = React.useState([]);

    const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    const [customerId, setCustomerId] = React.useState(0);

    const data = useQueryFetch('customers').fetchedData

    const dropDownData: { name: any; id: any; }[] = []

    data?.map((data: any, index: any) => {

        dropDownData.push({
            name: data.name,
            id: data.id,
        })

    })

    const tax = useQueryFetch('taxes').fetchedData

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

        <Grid container justifyContent="center" sx={{ ml: 'auto', mt: { xs: 4, md: 0 } }}>

            <Grid container justifyContent="center" >

                <Grid container bgcolor="" lg={11} >

                    <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit}>

                        <Grid justifyContent="center" bgcolor="" md={11} sx={{ bgcolor: '' }}>

                            <FormHeader xs="none" md="flex" heading="Create Sales Orders" />

                        </Grid>

                        <Divider />

                        <Grid container >

                            <CustomDropDown fieldName="Customer Name" dropDownData={dropDownData} data={customerId} setData={setCustomerId} />

                            {

                                formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />

                                )

                            }

                            <CustomDropDown taxtType={true} fieldName="Tax Type" dropDownData={tax} data={taxType} setData={setTaxType} />

                        </Grid>

                        <ItemFormTable items={items} setItems={setItems} />

                        <FormHeader xs="flex" md="none" />

                    </form>

                </Grid>

            </Grid >

        </Grid >

    )
}

export default page