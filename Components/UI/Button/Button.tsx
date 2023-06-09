import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CreateButton(props: any) {

  const { onClick,path } = props

  const opt = "signup"

  const router = useRouter();

  return (

    <Grid container>

      <Button variant="contained" onClick={() => router.push(`${path}`)}>{props.children}</Button>

    </Grid>

  )
}
