import { Box, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SubSideBar from './SubSideBar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { items } from './helpers';
import Popup from 'reactjs-popup';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/navigation';

export default function SideBar(props: any) {

    const { gridSize, setGridSize } = props

    const router = useRouter();

    const isExpand = gridSize.sidebar === 2;

    const Expand = () => {

        setGridSize({

            sidebar: gridSize.sidebar === 2 ? 1 : 2,

            layout: gridSize.layout === 10 ? 11 : 10
        })

    }

    return (

        <Grid container md={gridSize.sidebar} justifyContent="center" >


            <Grid container justifyContent="center" sx={{ bgcolor: "#D9D9D9", height: "7vh", alignItems: 'center' }}>

                {
                    isExpand ? <ArrowBackIcon
                        onClick={Expand}
                        sx={{ fontSize: 40, cursor: 'pointer' }} /> : <ArrowForwardIcon onClick={Expand} sx={{ fontSize: 40, cursor: 'pointer' }} />

                }

            </Grid>


            <Grid container sx={{ height: "90vh" }}>

                <Grid container sx={{ height: "fit-contenti" }}>

                    {!isExpand ?

                        items.map((data, index) =>

                            <Grid key={index} container sx={{ mt: 2, justifyContent: "center" }}>

                                <Popup trigger={<data.icon sx={{ cursor: 'pointer', fontSize: '2rem' }} />} position="right center">

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

                        :

                        <SubSideBar />

                    }

                </Grid >

            </Grid>


        </Grid >
    )
}