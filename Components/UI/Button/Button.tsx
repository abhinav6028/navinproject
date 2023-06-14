"use client"
import { Grid, Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function CreateButton(props: any) {

  const { onClick, path } = props;

  const router = useRouter()

  return (
    <Grid container>

      <Box

        onClick={() => router.push(`${path}`)}
        sx={{
          bgcolor: '#ff9900', borderRadius: 2, my: 2, ml: 'auto', mr: 13, py: 1.5, px: 4, cursor: 'pointer',
          "&:hover": {
            backgroundColor: '#ffff',
            boxShadow: "rgba(100, 100, 111, 0.2) 10px 7px 29px 7px"
          }
        }}>

        <Typography variant='h5' fontWeight="600">CREATE</Typography>

      </Box>

    </Grid>
  )
}
