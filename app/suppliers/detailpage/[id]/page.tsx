/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import DetailPage from '../../../../Components/UI/DetailPage/DetailPage';
import { useQueryFetchById } from '../../../../hooks/useFetch';

function page() {

    const { id } = useParams();

    const data = useQueryFetchById('suppliers', id)

    const finalData = data.fetchedData;

    console.log("finalData", finalData);

    const fieledItems = [

        {
            fieledName: "Company Name",
            itemName: finalData?.company_name
        },
        {
            fieledName: "Address",
            itemName: finalData?.address
        },
        {
            fieledName: "Company Mob",
            itemName: finalData?.mobile
        },
        {
            fieledName: "Company Email",
            itemName: finalData?.email
        },
        {
            fieledName: "Tax Type",
            itemName: finalData?.tax_type
        },
        {
            fieledName: "Tax Number",
            itemName: finalData?.tax_no
        },
        {
            fieledName: "Dealer Name",
            itemName: finalData?.contact_person_name
        },
        {
            fieledName: "Dealer Mob",
            itemName: finalData?.contact_person_mobile
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