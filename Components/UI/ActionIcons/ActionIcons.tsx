/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';
import useBearerToken from '../../../hooks/useBearerToken';
import axios from 'axios';


export const Edit = (props: any) => {

    const { code, id, path } = props;

    const router = useRouter();

    return (

        <Box display="flex" sx={{ cursor: 'pointer', py: 1 }}
            //onClick={() => router.push(`/items/products/2`)}
            onClick={() => router.push(`${path}/${id}`)}
        >

            <ModeEditIcon sx={{ cursor: 'pointer', ml: 1 }} />
            <Typography fontWeight="550" px={1}>EDIT</Typography>

        </Box>

    )
}





export const Delete = (props: any) => {

    const { id, url } = props;

    console.log("id////////////", id);

    const deleteItem = () => {

        const token = useBearerToken();

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };

        axios.delete(`/${url}/${id}`,
            {
                headers
            }
        ).then(() => {
            alert("workinnnnnnnnnnnngggggggggggggggg")
        })
    }

    return (

        <Box display="flex" sx={{ cursor: 'pointer', py: 1.5 }} onClick={deleteItem}>

            <DeleteIcon sx={{ ml: 1 }} />
            <Typography fontWeight="550" px={1}>DELETE</Typography>

        </Box>

    )
}

