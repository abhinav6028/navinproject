"use client"
import { Grid, Box, Typography, Button } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { Children } from 'react';
import Cookies from 'js-cookie';

export const CreateButton = (props: any) => {

  const { heading, fileName } = props;

  const router = useRouter()

  return (

    <Grid container bgcolor="" lg={11} sx={{ my: 3, alignItems: 'center' }}>

      <Typography variant="h4" fontWeight="bolder">{heading}</Typography>

      <Box bgcolor="#1F51FF"

        onClick={() => router.push(`/${fileName}/create`)}
        sx={{ ml: 3, py: 1.5, px: 3, borderRadius: 7, cursor: 'pointer' }}>

        <Typography sx={{ fontWeight: 600, color: '#ffff' }}>ADD NEW ITEM</Typography>

      </Box>

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

    <Grid lg={8} container justifyContent="start" sx={{ mt: 2, mb: 2 }}>

      <Box bgcolor="#24a0ed"
        onClick={() => router.back()}
        sx={{ px: 3.5, py: 1, borderRadius: 6, cursor: 'pointer' }}>

        <Typography variant='h6' fontWeight="550">Back</Typography>

      </Box>

    </Grid>

  )

}

export const LogOutBtn = (props: any) => {


  return (


    <Grid container justifyContent="center" bgcolor="" alignItems="center">

      <Box
        onClick={() => Cookies.remove('auth_token')}
        sx={{ py: 1.5, px: 3, borderRadius: 7, cursor: 'pointer', bgcolor: "#1F51FF" }}>

        <Typography sx={{ fontWeight: "650", color: "#ffff" }}>LOG OUT</Typography>

      </Box>

    </Grid>

  )

}

export const SubmitButton = (props: any) => {

  return (
    <Grid container sx={{ mt: 3 }}>

      <Button type="submit" sx={{ borderRadius: 3, bgcolor: '#1F51FF', width: '100%' }} variant="contained">

        <Typography variant='h6' sx={{ fontWeight: 600, cursor: 'pointer', px: 1 }}>{props.children}</Typography>

      </Button>

    </Grid>
  )

}