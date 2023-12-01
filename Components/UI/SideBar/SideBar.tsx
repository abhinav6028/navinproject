import { Box, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { subRoutes } from './helper';
import Popup from 'reactjs-popup';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';



export const SideBar = () => {

    const [isExpand, setIsExpand] = useState(true)

    const router = useRouter()

    const currentPath = usePathname()

    const [bool, setBool] = useState([]);

    const Expand = () => {

        setIsExpand(!isExpand)
    }

    // const [expand,setExpand] = useState(fals)

    const Open = (index: any) => {

        let newArray: any = [...bool]

        newArray[index] = !newArray[index];

        setBool(newArray)

    }

    const Primary_Color = "#182834"

    return (

        <Grid sx={{
            width: 'fit-content',
            backgroundColor: "white", borderRight: "1px solid #EAEDED",
            display: { xs: "none", md: "block" },
            height: "100vh",
        }}>
            <Grid sx={{ mt: 10 }}>
                {subRoutes.map((data: any, index: any) =>

                    <Box key={index} sx={{
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "start",
                    }}>

                        <Box onClick={() => {
                            Open(index)
                        }}

                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "start",
                                cursor: "pointer",
                                backgroundColor: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "#ede9e0" : "transparent",
                                px: 2, py: .8,
                                mx: 2, my: 0.5,
                                borderRadius: "25px",
                                '&:hover': {
                                    backgroundColor: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "none" : "#EFEEEE",
                                    transition: "0.3s",
                                },
                            }}>

                            <Popup trigger={<Box> <data.icon sx={{
                                color: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "#ffad00" : Primary_Color,


                            }} /> </Box>} position="right center">

                                {data?.children?.map((data: {
                                    path: any; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> |
                                    React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode
                                    | null | undefined;
                                }, index: any) => {

                                    return (
                                        <Box key={index} bgcolor="white">

                                            <Box sx={{
                                                borderRadius: 1,
                                                cursor: 'pointer',
                                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"

                                            }}>

                                                <Typography
                                                    onClick={() => router.push(`${data.path}`)}
                                                    sx={{ py: 0.5, px: 0.8, fontWeight: 700 }}
                                                >{data.text}</Typography>

                                            </Box>

                                        </Box>

                                    )
                                })
                                }
                            </Popup>


                            {isExpand &&
                                <>
                                    <Typography variant='subtitle2'
                                        sx={{
                                            ml: 2,
                                            width: "140px",
                                            color: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "#ffad00" : "black",
                                            fontWeight: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "" : "normal",
                                            fontSize: 15,
                                        }}>{data.name}</Typography>

                                    {bool[index] === true ? <KeyboardArrowDownIcon sx={{ fontSize: '1.2rem' }} /> : <KeyboardArrowRightIcon sx={{ fontSize: '1.2rem' }} />}

                                </>}

                        </Box>

                        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                            {bool[index] === true && data?.children?.map((drop: any, index: any) =>

                                <Box key={index} onClick={() => router.push(drop.path)} sx={{
                                    width: "80%",
                                    display: "flex",
                                    py: .8,
                                    m: 0.5,
                                    alignItems: "center",
                                    justifyContent: "start",
                                    cursor: "pointer",
                                    borderRadius: "10px",
                                    '&:hover': {
                                        backgroundColor: "#EFEEEE",
                                        transition: "0.3s",
                                    },
                                }}>

                                    <drop.icon sx={{
                                        color: 'grey',
                                        fontSize: currentPath === drop.path ? "1.3rem" : "1.3rem",
                                        ml: 2
                                    }} />

                                    <Typography variant='subtitle2' sx={{
                                        color: "#36383E",
                                        fontSize: currentPath === drop.path ? "0.9rem" : "0.8rem",
                                        fontWeight: 'normal',
                                        ml: 1.5
                                    }}>{drop.text}</Typography>

                                </Box>

                            )}

                        </Box>

                    </Box >

                )
                }
            </Grid>

            <Grid container sx={{
                justifyContent: 'center'
            }}>
                <Box sx={{
                    bgcolor: 'black', width: 'fit-content', display: "flex", px: 2, py: 1, borderRadius: '25px',
                    position: 'absolute', bottom: 30, cursor: 'pointer'
                }}>

                    <Typography sx={{ color: '#FFF', fontSize: 15 }}>Download App</Typography>
                    <DownloadForOfflineOutlinedIcon sx={{ color: '#FFF', fontsize: "", ml: 1 }} />

                </Box>

            </Grid>

        </Grid >

    )
}