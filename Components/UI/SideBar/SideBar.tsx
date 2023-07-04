import { Box, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SubSideBar from './SubSideBar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { items } from './helpers';
import Popup from 'reactjs-popup';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function SideBar() {

    const [click, setClick] = React.useState(false);

    return (
        <Grid container lg={click ? 1.7 : 0.5} sx={{ justifyContent: 'center', flexDirection: 'column', bgcolor: click ? '' : 'grey' }}>

            <Grid container sx={{ justifyContent: 'center' }}>

                <Box sx={{ m: 1, justifyContent: 'center', width: 'fit-content' }}>

                    {
                        click ? <ArrowBackIcon onClick={() => setClick(!click)} sx={{ fontSize: 40, cursor: 'pointer' }} />
                            : <ArrowForwardIcon onClick={() => setClick(!click)} sx={{ fontSize: 40, cursor: 'pointer' }} />

                    }


                    <Grid sx={{ display: click ? 'none' : '', flexDirection: 'column' }}>

                        <Grid>

                            {
                                items.map((data, index) =>
                                    <Grid key={index} container sx={{ mt: 2, justifyContent: "center" }}>

                                        <Popup trigger={<data.icon sx={{ cursor: 'pointer', fontSize: '2rem' }} />} position="right center">

                                            <Box bgcolor="#ffff" sx={{}}>

                                                {
                                                    data.subRouts?.map((item: any, index: any) =>

                                                        <Box key={index} sx={{ bgcolor: 'grey' }}>

                                                            <Typography sx={{ fontWeight: '550', p: 1 }} >{item.name}</Typography>

                                                        </Box>

                                                    )
                                                }

                                            </Box>

                                        </Popup>

                                    </Grid>

                                )
                            }

                        </Grid>

                    </Grid>

                </Box>

            </Grid >

            {click ? <SubSideBar /> : null}

        </Grid >
    )
}
