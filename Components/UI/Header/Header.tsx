"use client"
import { Box, Button, Grid, Typography } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import PopUp from '../PopUp/PopUp'
import { NAV_ITEMS } from './helpers'

export default function Header() {

    const router = useRouter()

    const path = usePathname()

    return (

        <Grid container bgcolor="">

            <Grid container lg={2} bgcolor="">

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

            <Grid container lg={7} bgcolor="" alignItems="center" justifyContent="space-around" >

                {
                    NAV_ITEMS.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }, id: React.Key | null | undefined) =>

                        <Typography key={id}

                            onClick={() =>
                                router.push(item.path)
                            }

                            sx={{

                                cursor: 'pointer',
                                bgcolor: '',
                                py: 1.5,
                                px: .7,
                                "&:hover": {
                                    borderRadius: 2,
                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    fontWeight: "bold"
                                },

                                borderRadius: path === item.path ? 2 : "normal",
                                boxShadow: path === item.path ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" : "normal",
                                fontWeight: path === item.path ? "bold" : "normal",

                            }}>{item.name}</Typography>
                    )

                }

            </Grid>

            <Grid lg={2}>

                <Button variant="contained" onClick={() => router.push('/signup')}>Contained</Button>

            </Grid>

        </Grid >
    )
}
