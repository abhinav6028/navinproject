"use client"
import { Box, Grid } from '@mui/material';
import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useRouter } from 'next/navigation';


export default function EditIcon(props: any) {

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


