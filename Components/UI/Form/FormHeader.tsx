import { Grid, Typography } from '@mui/material'
import React from 'react'
import { BackButton, SubmitButton } from '../Button/Button'

export default function FormHeader(props: any) {

    const { heading } = props

    return (
        <Grid container justifyContent="end" flexDirection="row" sx={{ py: 2 }}>

            <Typography variant='h5' mr="auto" sx={{ fontWeight: 550 }}>{heading}</Typography>

            <Grid sx={{ mr: 4 }}>
                <BackButton />
            </Grid>

            <Grid sx={{ mr: 4 }}>
                <SubmitButton>Create</SubmitButton>
            </Grid>


        </Grid>
    )
}
