/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import DetailPage from '../../../../Components/UI/DetailPage/DetailPage';
import { useQueryFetchById } from '../../../../hooks/useFetch';

function page() {

    const { id } = useParams();
 
    const data = useQueryFetchById('categories', id)

    const finalData = data.fetchedData;

    console.log("finalData", finalData);
 
    const fieledItems = [

        {
            fieledName: "Brand Name",
            itemName: finalData?.name
        },
        {
            fieledName: "Description",
            itemName: finalData?.description
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