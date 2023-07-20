import { Grid, Typography } from '@mui/material'
import React from 'react'
import { PRIMARY_COLOUR } from '../../../urls/colours';
import { BackButton, CreateButton, SubmitButton } from '../Button/Button'

export default function FormHeader(props: any) {

    const { heading, btnShow, type, btnChange } = props

    console.log("type", type);


    return (
        <Grid container justifyContent="end" flexDirection="row" sx={{ py: 2, alignItems: 'center' }}>

            <Typography variant='h5' mr="auto" sx={{ fontWeight: 550, color: PRIMARY_COLOUR }}>{heading}</Typography>

            <Grid sx={{ display: { xs: 'none', lg: 'flex', sm: 'none' } }}>

                <Grid sx={{ mr: 4, }}>
                    <BackButton />
                </Grid>

                <Grid sx={{ mr: 4, }}>

                    <SubmitButton>Create</SubmitButton>

                </Grid>

                {/* {
                    btnChange == "true" ?

                        <CreateButton btnChange={btnChange} /> :

                        

                } */}



            </Grid>

        </Grid >
    )
}
