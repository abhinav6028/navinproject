import { Box, Button, Grid, Typography } from '@mui/material'
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { PRIMARY_COLOUR } from '../../../urls/colours';
import { BackButton, CreateButton, SubmitButton } from '../Button/Button'

export default function FormHeader(props: any) {

    const { heading, parts, type } = props

    const router = useRouter()

    const { id } = useParams()

    return (
        <Grid container justifyContent="end" flexDirection="row" sx={{ py: 2, alignItems: 'center' }}>

            <Typography variant='h5' mr="auto" sx={{ fontWeight: 550, color: PRIMARY_COLOUR }}>{heading}</Typography>

            <Grid sx={{ display: { xs: 'none', lg: 'flex', sm: 'none' } }}>

                <Grid sx={{ mr: 4, }}>
                    <BackButton />
                </Grid>

                <Grid sx={{ mr: 4, display: heading == "Overview" ? 'none' : '.none' }}>

                    <SubmitButton>{type == "edit" ? "Update" : "Create"}</SubmitButton>

                </Grid>

                <Grid sx={{ mr: 4, display: heading == "Overview" ? 'flex' : 'none' }}>

                    <Box onClick={() => router.push(`${parts[1]}/${parts[2]}/${id}`)} sx={{}}>

                        <Button type="submit" sx={{ borderRadius: 3, bgcolor: PRIMARY_COLOUR, width: '100%' }} variant="contained">

                            <Typography variant='h6' sx={{ fontWeight: 600, cursor: 'pointer', px: 1 }}>Edit</Typography>

                        </Button>

                    </Box>

                </Grid>

            </Grid>

        </Grid >
    )
}
