import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import TableUi from '../UI/TableUi/TableUi'

export default function Dashboard() {

  const router = useRouter()

  return (
    <Grid container>

      <Grid container>

        <Box bgcolor="red" onClick={() => router.push('/dashboard/create')} sx={{
          ml: 2,
          my: 2,
          cursor: 'pointer'
        }}>

          <Typography variant='h5' sx={{
            px: 2,
            py: 1
          }}> CREATE </Typography>

        </Box>

      </Grid>



      <TableUi />

    </Grid >
  )
}
