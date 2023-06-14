"use client"


import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '../urls/urls'
// import { BASE_URL } from "../urls/urls";

export const useQueryFetch = (url: any) => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

    const { isLoading, error, data: fetchedData, refetch } = useQuery([url], () =>

        fetch(BASE_URL + url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then(res =>
            res.json()
        )
    )


    return { fetchedData: fetchedData?.result, refetch }
}


export const useQueryFetchId = (url: any, id: any) => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

    const { isLoading, error, data: fetchedData, refetch } = useQuery([url, id], () =>
        fetch(`${BASE_URL + url + '/' + id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then(res =>
            res.json()
        )
    )

    return { fetchedData: fetchedData?.result, refetch }
}


// import { BASE_URL } from "../urls/urls";

// export default async function getData(url: any) {

//     //const { url } = props

//     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

//     const headers = {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//     };

//     //const res = await fetch(`https://apierp.oyvaa.com/${url}`, { headers });

//     const res = await fetch(`${BASE_URL}/${url}`, { headers });

//     return res.json();

// }
