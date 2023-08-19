import { Box, Button, Grid } from '@mui/material';
import React from 'react'


export const PrimaryButton = (props: any) => {

  const { children, onClick, bgcolor, type, m, mt, my, className } = props;

  return (

    <Grid container>

      <Box sx={{ ml: { md: 3, sm: 1 } }}>

        <Button className={className} type={type} sx={{
          textTransform: "initial", borderRadius: "0px",
          color: bgcolor === "white" ? "black" : "white",
          width: props.width, px: 4, py: 1, my: my, mt: mt,
          boxShadow: "none", m: m, bgcolor: bgcolor, border: `1px solid ${bgcolor}`, "&:hover": {
            bgcolor: "transparent", boxShadow: "none",
            color: "black", border: `1px solid ${bgcolor}`,
          },
        }}
          variant="contained"
          onClick={onClick}
        >
          {children}
        </Button >

      </Box>



    </Grid>

  )
}


export const OutlinedButton = (props: any) => {

  const { children, onClick, bgcolor, type, m, my } = props;

  return (
    <Button type={type} sx={{
      textTransform: "initial",
      color: bgcolor, my: my,
      width: props.width, px: 4, borderRadius: "0",
      boxShadow: "none", m: m, bgcolor: "transparent", border: `1px solid ${bgcolor}`, "&:hover": {
        bgcolor: bgcolor, boxShadow: "none",
        color: "white", border: `1px solid ${bgcolor}`,
      },
    }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button >
  )
}