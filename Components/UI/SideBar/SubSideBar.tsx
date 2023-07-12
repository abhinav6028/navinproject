import { Box, Grid, Typography } from '@mui/material'
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { items } from './helpers';


export default function SubSideBar() {

    const router = useRouter();

    const path = usePathname()

    console.log("path", path);


    return (
        <Grid container justifyContent="center" sx={{ mb: 'auto' }}>

            <Sidebar style={{ width: '100%' }}>
                <Menu>
                    {
                        items.map((data, index) =>

                            <SubMenu key={index} label={data.name}>

                                {
                                    data?.subRouts?.map((item, index) => {

                                        console.log("path2", item.path);


                                        return (
                                            <MenuItem key={index} onClick={() => router.push(`${item.path}`)}>

                                                <Box sx={{ bgcolor: path == item.path ? 'red' : '', width: '100%', borderRadius: 2 }}>

                                                    <Typography sx={{ py: 1.2, ml: 1 }} onClick={() => router.push(item.path)}> {item.name} </Typography>
                                                </Box>

                                            </MenuItem>
                                        )
                                    }



                                    )
                                }

                            </SubMenu>
                        )
                    }

                </Menu>
            </Sidebar>
        </Grid>
    )
}
