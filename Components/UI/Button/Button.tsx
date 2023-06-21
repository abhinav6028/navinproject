"use client"
import { Grid, Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React from 'react'

export const CreateButton = (props: any) => {

  const { heading,fileName } = props;

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

//   const { onClick, path } = props;

//   const router = useRouter()

//   return (
//     <Grid container>

//       <Box

//         onClick={() => router.push(`${path}`)}
//         sx={{
//           bgcolor: '#ff9900', borderRadius: 2, my: 2, ml: 'auto', mr: 13, py: 1.5, px: 4, cursor: 'pointer',
//           "&:hover": {
//             backgroundColor: '#ffff',
//             boxShadow: "rgba(100, 100, 111, 0.2) 10px 7px 29px 7px"
//           }
//         }}>

//         <Typography variant='h5' fontWeight="600">CREATE</Typography>

//       </Box>

//     </Grid>
//   )
// }


export const BackButton = (props: any) => {

  const { path } = props;

  const router = useRouter()

  return (

    <Grid lg={8} container justifyContent="start" sx={{ mt: 2, mb: 2 }}>

      <Box bgcolor="#24a0ed" onClick={() => router.push(`${path}`)} sx={{ px: 3.5, py: 1, borderRadius: 6, cursor: 'pointer' }}>

        <Typography variant='h6' fontWeight="550">{props.children}</Typography>

      </Box>

    </Grid>

  )

}
