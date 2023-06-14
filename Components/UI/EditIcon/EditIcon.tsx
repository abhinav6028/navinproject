"use client"
import { Grid } from '@mui/material';
import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useRouter } from 'next/navigation';


export default function EditIcon() {




    return (
        <Grid >

            <ModeEditIcon sx={{ cursor: 'pointer' }} />

        </Grid>
    )
}
