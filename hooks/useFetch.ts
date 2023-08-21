"use client"
import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '../urls/urls'
import useBearerToken from './useBearerToken'

export const useQueryFetch = (url: any, search: any) => {

    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

    const token = useBearerToken()

    const { isLoading, error, data: fetchedData, refetch } = useQuery([url], () =>

        fetch(BASE_URL + url + search, {
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


export const useQueryFetch2 = (url: any, page: any, search: any,) => {

    console.log(".....................", page);

    const token = useBearerToken()

    const { isLoading, error, data: fetchedData, refetch } = useQuery([url], () =>

        fetch(BASE_URL + url + `?page=${page}&limit=3` + search, {
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


export const useQueryFetchByCode = (url: any, code: any) => {


    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGkiLCJyb2xlIjoiYWRtaW4iLCJmaXJtX2lkIjoyMiwiaWQiOjIzLCJpYXQiOjE2ODYxMTc5NjUsImV4cCI6MTY5Mzg5Mzk2NX0.4Z-nQNySQI4KephYLN0PKzI2oQ_9QDDk4Fj_yhTgfHo"

    const { isLoading, error, data: fetchedData, refetch } = useQuery([url, code], () =>
        fetch(`${BASE_URL + url + '/' + code}`, {
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

export const useQueryFetchById = (url: any, id: any) => {


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
