import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';
import Popup from 'reactjs-popup';
import { subRoutes } from '../../SideBar/helper';


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
        }
    ]


    const MenuBar = () => {

        setMenu(!menu)

    }

    return (

        <Grid container sx={{
            display: { xs: "block", md: "none" },

        }}>

            <Box sx={{
                width: "100%", display: 'flex',
                justifyContent: "center", alignItems: "center",
                py: 1,
                position: "fixed",
                zIndex: "110", top: "0", left: "0",

            }} >

                <Box position="fixed" left="0">

                    {menu ? <CloseIcon sx={{ ml: 2, color: "#513328", fontSize: { xs: '2rem' } }} onClick={() => setMenu(!menu)} /> :
                        <MenuIcon sx={{ ml: 2, color: "#513328", fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

                </Box>

                <Typography variant='h5' sx={{ py: 1 }}>ERP</Typography>

            </Box>

            <Box sx={{
                transition: "0.5s",
                width: "100%", height: "fit-content",
                position: "fixed", zIndex: "100", left: "0%", top: menu ? "50px" : "-70%", bgcolor: 'white'
            }}>

                {
                    subRoutes.map((data: any, index: any) =>

                        <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>

                            <Box onClick={MenuBar} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>

                                <Popup trigger={<Typography sx={{ fontWeight: "550" }}>{data.name}</Typography>} position="right center">

                                    {data.children?.map((item: any, index: any) =>

                                        <Box key={index} sx={{ bgcolor: 'grey', cursor: 'pointer' }}>

                                            <Typography onClick={() => router.push(item.path)} sx={{ fontWeight: '550', p: 1 }} >{item.text}</Typography>

                                        </Box>

                                    )}

                                </Popup>

                                {/* <Typography sx={{ color: "black", fontWeight: '550', cursor: 'pointer' }} onClick={() => router.push(data.path)}>{data.name}</Typography> */}

                            </Box>

                        </Box>
                    )}

            </Box>

            <Divider />

        </Grid >

    )
}
