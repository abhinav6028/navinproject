import { Grid } from '@mui/material';
import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useRouter } from 'next/navigation';


export default function EditIcon() {

    const router = useRouter();

    const hey = () => {
        // alert('working............')
        console.log('working on it');

    }

    return (
        <Grid>

            <ModeEditIcon onClick={hey} sx={{ cursor: 'pointer' }} />

        </Grid>
    )
}
