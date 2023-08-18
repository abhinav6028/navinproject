"use client"

import { Button } from '@mui/material'
import React from 'react';

export const PrimaryButton = (props: any) => {


  const { my, mt, children, onClick, bgcolor, width } = props;

  return (

    <Button onClick={onClick} size='medium' type="submit" sx={{
      borderRadius: "0px",
      textTransform: "capitalize",
      my: my,
      mt: mt,
      bgcolor: bgcolor, width: width, boxShadow: "none",
      '&:"hover': {
        bgcolor: "transparent"
      }
    }} variant="contained">

      {children}

    </Button>


  )

}