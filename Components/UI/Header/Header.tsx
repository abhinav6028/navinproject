import { Grid, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Popup from 'reactjs-popup';
import { items } from '../SideBar/helpers';

export default function Header() {

    return (

        <Grid container sx={{ height: "7vh", alignItems: 'center' }} bgcolor="">

            <Tooltip title="Quuick Create" arrow >
                <IconButton sx={{ bgcolor: 'grey', ml: 4 }}>

                    <Grid container justifyContent="center">

                        <Popup trigger={<AddIcon sx={{ fontSize: '2rem' }} />} position="bottom center">

                            <Grid container lg={10} bgcolor="green" >



                                {/* {
                                    items.map((data: any, index: any) =>

                                        <Grid key={index} bgcolor="grey" p={2} flexDirection="column">
                                            <Typography variant='h6'>{data.name}</Typography>
                                            {
                                                data.subRouts?.map((item: any, index: any) =>
                                                    <Typography variant=''>{item.name}</Typography>
                                                )
                                            }

                                        </Grid>

                                    )
                                } */}

                            </Grid>

                        </Popup>

                    </Grid>
                </IconButton >
            </Tooltip >

        </Grid >

    )
}


