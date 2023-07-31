/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid } from '@mui/material'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'
import DetailPage from '../../../../../Components/UI/DetailPage/DetailPage'
import { useQueryFetchByCode } from '../../../../../hooks/useFetch'

function page() {

  const { id } = useParams();

  const router = useRouter();

  const path = usePathname();

  let parts = path.split("/");

  const data = useQueryFetchByCode('products', id)

  const finalData = data.fetchedData;


  const overviewData = [
    {
      fieldName: 'Code',
      value: finalData?.code
    },
    {
      fieldName: 'Category',
      value: finalData?.category?.name
    },
    {
      fieldName: ' Sub Category',
      value: finalData?.subcategory?.name
    },
    {
      fieldName: 'Product Name',
      value: finalData?.name
    },
    {
      fieldName: 'Brand',
      value: finalData?.brand
    },
    {
      fieldName: 'Code',
      value: finalData?.code
    },
    {
      fieldName: 'Unit',
      value: finalData?.unit
    },
    {
      fieldName: 'Unit Price',
      value: finalData?.unit_price
    },
    {
      fieldName: 'Code',
      value: finalData?.code
    },
    {
      fieldName: 'Tax Amount',
      value: finalData?.tax_amount
    },
    {
      fieldName: 'Tax Type',
      value: finalData?.tax_type
    },


  ]


  return (

    <Grid container sx={{ height: 'fit-content' }} bgcolor="" mt={10} lg={11}>


      <DetailPage parts={parts} btnChange="true" overviewData={overviewData} />

    </Grid>

  )
}

export default page