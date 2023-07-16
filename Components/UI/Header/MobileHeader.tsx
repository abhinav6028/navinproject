import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';
import { items } from '../SideBar/helpers';
import Popup from 'reactjs-popup';

export default function MobileHeader() {

    const [menu, setMenu] = useState(false)

    const router = useRouter();

    const navbarItems = [
        {
            title: 'Home',
            path: "/"
        },
        {
            title: 'Furniture',
            path: "/furniture"
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Project',
            path: '/project'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
        {
            title: 'Contact Us',
            path: '/contactus'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Project',
            path: '/project'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
        {
            title: 'Contact Us',
            path: '/contactus'
        },

    ]


    const MenuBar = () => {

        setMenu(!menu)

    }

    return (

        <Grid container sx={{
            display: { xs: "block", md: "none" },
            bgcolor: '#FEF0E5', position: 'fixed'
        }}>

            <Box sx={{
                width: "100%", display: 'flex',
                justifyContent: "center", alignItems: "center",
                py: 1,
                position: "fixed",
                zIndex: "110", top: "0", left: "0",
                bgcolor: "#FEF0E5"
                // bgcolor: { MAIN_COLOR }
            }} >

                <Box position="fixed" left="0" sx={{
                    bgcolor: "#FEF0E5"
                }}>

                    {menu ? <CloseIcon sx={{ ml: 2, color: "#513328", fontSize: { xs: '2rem' } }} onClick={() => setMenu(!menu)} /> :
                        <MenuIcon sx={{ ml: 2, color: "#513328", fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

                </Box>

                <Box

                    onClick={() => router.push('/')}
                    style={{ cursor: 'pointer' }}
                    component="img"
                    sx={{
                        bgcolor: "#FEF0E5",
                        pt: 1,
                        pb: 1,
                        height: 50,
                        width: 100,
                        maxHeight: { xs: 40, sm: 50 },
                        maxWidth: { xs: 80, md: 90 },
                    }}
                    alt="The house from the offer."
                    src="/assets/logo/logo.png"
                />

            </Box>

            <Box sx={{
                transition: "0.5s",
                width: "100%", height: "fit-content",
                position: "fixed", zIndex: "100", left: "0%", top: menu ? "72px" : "-60%", bgcolor: "#FEF0E5"
            }}>
                {
                    items.map((data: any, index: any) =>

                        <Box key={index} sx={{ py: 0.5, ml: 1, width: 'fit-content' }}>

                            <Popup trigger={<Typography sx={{ fontWeight: "550" }}>{data.name}</Typography>} position="right center">

                                {
                                    data.subRouts?.map((item: any, index: any) =>

                                        <Box key={index} sx={{ bgcolor: 'grey', cursor: 'pointer' }}>

                                            <Typography onClick={() => router.push(item.path)} sx={{ fontWeight: '550', p: 1 }} >{item.name}</Typography>

                                        </Box>

                                    )
                                }

                            </Popup>

                        </Box>

                    )
                }


                {/* {
                    items.map((data, index) =>

                        <Grid key={index} container sx={{  }}>

                            <Popup trigger={<>{data.name}</>} position="right center">

                                <Box bgcolor="#ffff">

                                    {
                                        data.subRouts?.map((item: any, index: any) =>

                                            <Box key={index} sx={{ bgcolor: 'grey', cursor: 'pointer' }}>

                                                <Typography onClick={() => router.push(item.path)} sx={{ fontWeight: '550', p: 1 }} >{item.name}</Typography>

                                            </Box>

                                        )
                                    }

                                </Box>

                            </Popup>

                        </Grid>

                    )
                } */}

                {/* {
                    navbarItems.map((data: any, index: any) =>

                        <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, bgcolor: "#FEF0E5" }}>

                            <Box onClick={MenuBar} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>

                                <Typography sx={{ color: "black", fontWeight: '550', cursor: 'pointer' }} onClick={() => router.push(data.path)}>{data.title}</Typography>

                            </Box>

                        </Box>
                    )} */}

            </Box>

        </Grid >
    )
}
