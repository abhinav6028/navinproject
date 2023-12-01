import { Box, Grid } from '@mui/material'
import React from 'react'
import MobileHeader from './Header/MobileHeader'
import Header from './Header/Header'
import { SideBar } from '../SideBar/SideBar'


export default function Layout({ children }: any) {
    return (
        <Grid container>


            <Grid>

                <MobileHeader />

            </Grid>


            <Box sx={{ width: "100%", height: '90svh', display: "flex", backgroundColor: "white" }}>

                <SideBar />

                <Grid container >

                    {/* <Header /> */}

                    {children}

                </Grid>


            </Box >
        </Grid >
    )
}
