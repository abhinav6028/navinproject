/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid } from '@mui/material';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react'
import DetailPage from '../../../../../Components/UI/DetailPage/DetailPage';
import { useQueryFetchByCode } from '../../../../../hooks/useFetch';

function page() {

    const { id } = useParams();

    const router = useRouter();

    const path = usePathname();

    let parts = path.split("/");

    const data = useQueryFetchByCode('sales-orders', id)

    const finalData = data.fetchedData;

    const customerName = useQueryFetchByCode('customers', 1)

    const overviewData = [
        {
            fieldName: 'Customer Name',
            value: customerName?.POno
        },
        {
            fieldName: 'POno',
            value: finalData?.POno
        },
        {
            fieldName: ' Total',
            value: finalData?.total
        },
        {
            fieldName: 'Discount',
            value: finalData?.discount
        },
        {
            fieldName: 'Sub Total',
            value: finalData?.address
        },
        {
            fieldName: 'Tax Type',
            value: finalData?.taxId
        },
        {
            fieldName: 'Tax Amount',
            value: finalData?.taxAmount
        },
        {
            fieldName: 'Grand Total',
            value: finalData?.grandTotal
        },
        {
            fieldName: 'Firm',
            value: finalData?.firmId
        },

    ]


    return (

        <Grid container sx={{ height: 'fit-content' }} bgcolor="" mt={10} lg={11}>

            <DetailPage overviewData={overviewData} />

        </Grid>

    )
}

export default page