/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { items } from './helpers';

export default function SubSideBar() {

    const router = useRouter();

    const path = usePathname()

    const [one, setOne] = React.useState();

    console.log('one', one);

    const pathName = usePathname()

    //const result = one.filter((data: { path: string; }, index: any) => pathName == data.path)

    //console.log("result", result);


    return (
        <Grid container justifyContent="center" sx={{ mb: 'auto' }}>

            <Sidebar style={{ width: '100%' }}>
                <Menu>

                    {
                        items.map((data, index) => {

                            return (

                                <SubMenu icon={<data.icon sx={{}} />} style={{ fontSize: '1.3rem', color: '', }} key={index} label={data.name}>

                                    {
                                        data?.subRouts?.map((item, index) => {


                                            return (

                                                <MenuItem icon={<item.icon sx={{ fontSize: '1rem' }} />} key={index} onClick={() => {
                                                    router.push(item.path)
                                                    setOne(data)
                                                    //console.log("data", data);
                                                }}>

                                                    <Box sx={{ bgcolor: path == item.path ? '#D9D9D9' : '', width: '100%', borderRadius: 2 }}>

                                                        <Typography sx={{ py: 1.2, ml: 1, fontWeight: path == item.path ? 550 : '', }} > {item.name} </Typography>

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
