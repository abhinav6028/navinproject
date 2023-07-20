/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Grid } from '@mui/material'
import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'
import DetailPage from '../../../../../Components/UI/DetailPage/DetailPage'
import { useQueryFetchByCode } from '../../../../../hooks/useFetch'

function page() {

  const { id } = useParams();


  const path = usePathname();

  let parts = path.split("/");

  const data = useQueryFetchByCode('products', id)

  const router = useRouter();

  console.log("path",`${parts[1]}/${parts[2]}`)

 


 

  const finalData = data.fetchedData;

  console.log("finalData", finalData?.name);

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

      <button onClick={()=>router.push(`${parts[1]}/${parts[2]}/${id}`)}>edit</button>

      <DetailPage btnChange="true" overviewData={overviewData} />

    </Grid>

  )
}

export default page