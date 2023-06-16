"use client"
import { Box, Grid } from '@mui/material';
import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';


export const Edit = (props: any) => {

    const { id } = props;

    const router = useRouter();

    return (

        <Grid>

            <Box onClick={() => router.push(`/product/${id}`)}>
                <ModeEditIcon sx={{ cursor: 'pointer' }} />
            </Box>


        </Grid>
    )
}


export const Delete = () => {

    return (
        <Grid>
            <DeleteIcon />
        </Grid>

    )
}

