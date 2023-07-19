"use client"
import { Grid, Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { Children } from 'react';
import Cookies from 'js-cookie';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AddIcon from '@mui/icons-material/Add';
import { PRIMARY_COLOUR, SECONDARY_COLOUR } from '../../../urls/colours';


export const CreateButton = (props: any) => {

  const { heading, path } = props;


  const router = useRouter()

  return (

    <Grid container justifyContent="center" bgcolor="" height="fit-content">
      <Grid container lg={11} sx={{ my: 3, alignItems: 'center', height: 'fit-content', bgcolor: '' }}>

        <Typography variant="h6" ml={4} sx={{
          fontWeight: "bolder",
          color: PRIMARY_COLOUR
        }} >{heading}</Typography>

        <Box

          onClick={() => router.push(`${path}/create`)}
          sx={{ py: 1.5, px: 3, borderRadius: 7, cursor: 'pointer', bgcolor: PRIMARY_COLOUR, ml: 'auto', mr: 8 }}>

          <Typography sx={{ fontWeight: 600, color: '#ffff' }}> CREATE</Typography>

        </Box>

      </Grid>
    </Grid>
  )
}

export const ButtonEdit = (props: any) => {

  const { fileName, id } = props

  const router = useRouter()

  return (
    <Grid container justifyContent="flex-end" bgcolor="" alignItems="center">

      <Box
        onClick={() => router.push(`/${fileName}/${id}`)}
        sx={{ py: 1.5, px: 3, borderRadius: 7, cursor: 'pointer', bgcolor: "#1F51FF" }}>

        <Typography sx={{ fontWeight: "650", color: "#ffff" }}>EDIT</Typography>

      </Box>

    </Grid>
  )
}



export const BackButton = (props: any) => {

  const { path } = props;

  const router = useRouter()

  return (

    <Box height="fit-content" justifyContent="start" sx={{}}>

      <Box sx={{}}>

        <Button onClick={() => router.back()} sx={{ borderRadius: 3, bgcolor: '#808080', width: '100%' }} variant="contained">

          <Typography variant='h6' sx={{ fontWeight: 600, cursor: 'pointer', px: 1 }}>Back</Typography>

        </Button>

      </Box>

    </Box>

  )

}

export const LogOutBtn = (props: any) => {

  return (

    <Box onClick={() => Cookies.remove('auth_token')} sx={{ cursor: 'pointer', bgcolor: '#1F51FF' }} height="fit-content">

      <ExitToAppIcon sx={{ height: "fit-content" }} />

    </Box>

  )

}

export const SubmitButton = (props: any) => {

  return (
    <Box sx={{}}>

      <Button type="submit" sx={{ borderRadius: 3, bgcolor: PRIMARY_COLOUR, width: '100%' }} variant="contained">

        <Typography variant='h6' sx={{ fontWeight: 600, cursor: 'pointer', px: 1 }}>{props.children}</Typography>

      </Button>

    </Box>
  )

}