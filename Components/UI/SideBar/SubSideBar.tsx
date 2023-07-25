import React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { items } from './helpers';

export default function SubSideBar() {

    const router = useRouter();

    const path = usePathname()


    return (
        <Grid container justifyContent="center" sx={{
            mb: 'auto',

        }}>

            <Sidebar style={{ width: '100%' }}>
                <Menu>

                    {
                        items.map((data, index) => {

                            return (

                                <SubMenu icon={<data.icon sx={{}} />} style={{ fontSize: '1.3rem', color: '', }} key={index} label={data.name}>

                                    {
                                        data?.subRouts?.map((item, index) => {

                                            return (

                                                <MenuItem icon={<item.icon sx={{ fontSize: '1rem' }} />} key={index} onClick={() => router.push(`${item.path}`)}>

                                                    <Box sx={{ bgcolor: path == item.path ? '#D9D9D9' : '', width: '100%', borderRadius: 2 }}>

                                                        <Typography sx={{ py: 1.2, ml: 1, fontWeight: path == item.path ? 550 : '', }} onClick={() => router.push(item.path)}> {item.name} </Typography>

                                                    </Box>

                                                </MenuItem>

                                            )
                                        }
                                        )
                                    }

                                </SubMenu>
                            )
                        }
                        )

                    }
                </Menu>
            </Sidebar>
        </Grid >
    )
}
