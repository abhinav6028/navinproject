import { Grid } from '@mui/material'
import React from 'react'

export default function Header(props: any) {

    const { handleSideBar } = props;

    console.log("headr", handleSideBar);


    return (

        <Grid container sx={{
            bgcolor: handleSideBar ? 'blue' : 'green'
        }} lg={handleSideBar ? 10.3 : 10.3} bgcolor="red">
            {handleSideBar}
        </Grid>

    )
}
