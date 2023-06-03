"use client"
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { NAV_ITEMS } from './helpers'

export default function Header() {

    // const navItems = [
    //     {
    //         name: 'HOME',
    //         path: ''
    //     },
    //     {
    //         name: 'LEADS',
    //         path: ''
    //     }
    // ]


    return (
        <Grid container bgcolor="red">

            <Grid container lg={2} bgcolor="blue">

                <Box
                    component="img"
                    sx={{
                        height: 33,
                        width: 95,
                        p: 1.5,
                        cursor: 'pointer'
                    }}
                    alt="logo"
                    src="/assets/logo/logo.png"
                />

            </Grid>

            <Grid container lg={8} bgcolor="green" alignItems="center" justifyContent="space-around" >

                {
                    NAV_ITEMS.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }, index: React.Key | null | undefined) =>

                        <Typography className='hi' key={index} sx={{
                            cursor: 'pointer'
                        }}>{item.name}</Typography>

                    )

                }


            </Grid>

        </Grid >
    )
}
