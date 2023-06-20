/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import DetailPage from '../../../../Components/UI/DetailPage/DetailPage';
import { useQueryFetchById } from '../../../../hooks/useFetch';

function page() {

    const { id } = useParams();

    const data = useQueryFetchById('employees', id)

    const finalData = data.fetchedData;

    console.log("finalData", finalData);

    const fieledItems = [

        {
            fieledName: "Name",
            itemName: finalData?.name
        },
        {
            fieledName: "Address",
            itemName: finalData?.address
        },
        {
            fieledName: "Mobile",
            itemName: finalData?.mobile
        },
        {
            fieledName: "Employee Code",
            itemName: finalData?.code
        },
        {
            fieledName: "Created Date",
            itemName: finalData?.createdAt
        },

    ]


    return (

        <DetailPage

            fieledItems={fieledItems}

            finalData={finalData}

        />

    )
}

export default page 