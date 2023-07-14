import { Avatar, Badge, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {

    return (

        <Grid container sx={{ alignItems: 'center' }} bgcolor="#D9D9D9">


            <Typography variant='h5' sx={{ fontWeight: '600', ml: 2 }}>OYVAA ERP</Typography>


            <Grid container lg={1.5} sx={{ bgcolor: '', ml: "auto", alignItems: 'center', py: 2 }}>

                <Badge badgeContent={4} color="primary" sx={{ ml: 'auto', cursor: 'pointer' }}>

                    <NotificationsIcon color="action" />

                </Badge>

                <SettingsIcon sx={{ ml: 'auto', fontSize: '2rem', cursor: 'pointer' }} />

                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ ml: 'auto', mr: 3, cursor: 'pointer' }} />

            </Grid>

        </Grid >

    )
}


