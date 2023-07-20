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

  const data = useQueryFetchByCode('customers', id)

  const finalData = data.fetchedData;

  const overviewData = [
    {
      fieldName: 'Customer Name',
      value: finalData?.name
    },
    {
      fieldName: 'Country',
      value: finalData?.country
    },
    {
      fieldName: ' State',
      value: finalData?.state
    },
    {
      fieldName: 'City',
      value: finalData?.city
    },
    {
      fieldName: 'Address',
      value: finalData?.address
    },
    {
      fieldName: 'Zip Code',
      value: finalData?.zip
    },
    {
      fieldName: 'Mobile',
      value: finalData?.mobile
    },
    {
      fieldName: 'Email',
      value: finalData?.email
    },

  ]


  return (

    <Grid container sx={{ height: 'fit-content' }} bgcolor="" mt={10} lg={11}>

      <DetailPage  overviewData={overviewData} />

    </Grid>

  )
}

export default page