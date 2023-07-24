/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import axios from 'axios';
import React, { useState } from 'react'
import { useFormik } from 'formik';
import { Grid } from '@mui/material';
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

    const [items, setItems] = React.useState([])

    const data = useQueryFetch('suppliers').fetchedData

    //console.log("suppliers", data);

    const dropDownData: { name: any; id: any; }[] = []

    console.log("///////////////", dropDownData);

    data?.map((data: any, index: any) => {

        dropDownData.push({
            name: data.company_name,
            id: data.id,
        })


    })

    const [supplierId, setSupplierIdId] = React.useState('');

    console.log("supplierId", supplierId);

    const formik = useFormik({

        initialValues: {

            purchaseInvoiceNo: '',
            dueDate: '',
            invoiceNo: '',
            supplierId: '',
            date: '',
            subTotal: '',
            discount: '',
            taxPers: '',
            taxAmount: '',
            grandTotal: '',
            items: ''

        },

        onSubmit: (values) => {

            axios.post(`${BASE_URL}purchase-orders`, {

                "purchaseInvoiceNo": values.purchaseInvoiceNo,
                "dueDate": values.dueDate,
                "invoiceNo": values.invoiceNo,
                "supplierId": supplierId,
                "date": values.date,
                "subTotal": values.subTotal,
                "discount": values.discount,
                "taxId": 1,
                "taxPers": values.taxPers,
                "taxAmount": values.taxAmount,
                "grandTotal": values.grandTotal,
                "firmId": 1,
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
            textFieldName: 'supplierId',
            id: 'supplierId',
            name: 'supplierId',
            type: "number",
        },
        {
            textFieldName: 'Invoice No',
            id: 'purchaseInvoiceNo',
            name: 'purchaseInvoiceNo',
            type: "text",
        },
        {
            textFieldName: 'invoiceNo',
            id: 'invoiceNo',
            name: 'invoiceNo',
            type: "number",
        },
        {
            textFieldName: 'Due Date',
            id: 'dueDate',
            name: 'dueDate',
            type: "date",
        },
        {
            textFieldName: 'Date',
            id: 'date',
            name: 'date',
            type: "date",
        },
        {
            textFieldName: 'Sub Total',
            id: 'subTotal',
            name: 'subTotal',
            type: "number",
        },
        {
            textFieldName: 'Discount',
            id: 'discount',
            name: 'discount',
            type: "number",
        },
        {
            textFieldName: 'taxId',
            id: 'taxId',
            name: 'taxId',
            type: "number",
        },
        {
            textFieldName: 'Tax Pers',
            id: 'taxPers',
            name: 'taxPers',
            type: "number",
        },
        {
            textFieldName: 'Tax Amount',
            id: 'taxAmount',
            name: 'taxAmount',
            type: "number",
        },
        {
            textFieldName: 'Grand Total',
            id: 'grandTotal',
            name: 'grandTotal',
            type: "number",
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

                        <FormHeader heading="Create Purchase Order" />

                        <Grid container >

                            <CustomDropDown fieldName="Supplier Name" dropDownData={dropDownData} data={supplierId} setData={setSupplierIdId} />

                            {

                                formItems.map((data, index) =>

                                    <CustomTextField key={index} data={data} formik={formik} />

                                )

                            }

                        </Grid>

                        <ItemFormTable items={items} setItems={setItems} />

                    </form>

                </Grid>

            </Grid >

        </Grid >

    )
}

export default page