/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';
import useBearerToken from '../../../hooks/useBearerToken';
import axios from 'axios';
import { Modal, Popconfirm, message } from 'antd';


export const Edit = (props: any) => {

    const { code, id, path } = props;

    const router = useRouter();

    return (

        <Box display="flex" sx={{ cursor: 'pointer', py: 1 }}
            //onClick={() => router.push(`/items/products/2`)}
            onClick={() => router.push(`${path}/${id}`)}
        >

            <ModeEditIcon sx={{ cursor: 'pointer', ml: 1, color: '#38BF09' }} />
            <Typography fontWeight="550" px={1} sx={{ color: '#38BF09' }}>EDIT</Typography>

        </Box>

    )
}





export const Delete = (props: any) => {

    const { id, url } = props;

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
        ).then((res) => {
            if (res.data.success) {
                message.success(res.data.message, 1)
            } else {
                message.error(res.data.message, 1,)
            }
        })
    }

    const text = 'Are you sure to delete this task?';
    const description = 'Delete the task';

    const confirm = () => {
        message.info('Clicked on Yes.');
    };


    return (

        <Box display="flex" sx={{ cursor: 'pointer', py: 1.5 }}
            onClick={deleteItem}
        >

            <DeleteIcon sx={{ ml: 1, color: '#FF000F' }} />
            <Typography fontWeight="550" px={1} sx={{ color: '#FF000F' }}>DELETE</Typography>

            {/* <Popconfirm
                placement="bottomRight"
                title="Conform Delete   ..........."
                description={description}
                onConfirm={confirm}
                okText="Yes"
                cancelText="No"
            >
                <Typography fontWeight="550" px={1} sx={{ color: '#FF000F' }}>DELETE</Typography>
            </Popconfirm> */}


        </Box>

    )
}

