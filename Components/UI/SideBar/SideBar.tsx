import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { subRoutes } from './helper';


export const SideBar = () => {

    const [isExpand, setIsExpand] = useState(true)

    const router = useRouter()

    const currentPath = usePathname()

    const [bool, setBool] = useState([]);

    const Expand = () => {

        setIsExpand(!isExpand)
    }

    const Open = (index: any) => {

        let newArray: any = [...bool]

        newArray[index] = !newArray[index];

        setBool(newArray)

    }


    return (

        <Box sx={{
            overflow: "hidden", width: 'fit-content',
            px: 1,
            backgroundColor: "white", borderRight: "1px solid #EAEDED"
        }}>

            <Box onClick={Expand} sx={{ cursor: "pointer", display: "flex", justifyContent: 'center', alignItems: "center", p: 2 }}>

                <KeyboardDoubleArrowLeftIcon
                    sx={{ color: "blue", fontSize: "2rem", transform: isExpand ? "rotate(0deg)" : "rotate(180deg)" }} />

            </Box>

            <Divider />


            {subRoutes.map((data: any, index) =>

                <Box key={index} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "start", }}>

                    <Box onClick={() => {
                        Open(index)
                    }}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            cursor: "pointer",
                            backgroundColor: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "#00FFFF" : "transparent",
                            px: 2, py: 1.2,
                            mx: 2, my: 1,
                            borderRadius: "10px",
                            '&:hover': {
                                backgroundColor: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "none" : "#7DF9FF",
                                transition: "0.3s",
                            },
                        }}>

                        <data.icon sx={{
                            color: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "black" : "black",
                            fontSize: "1.8rem"
                        }} />


                        {isExpand &&
                            <>
                                <Typography variant='subtitle2'
                                    sx={{
                                        ml: 2,
                                        width: "150px",
                                        color: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "black" : "black",
                                        fontWeight: data?.children?.filter((fil: any) => currentPath === fil.path).length > 0 ? "bold" : "normal",
                                        fontSize: "1.1rem"
                                    }}>{data.name}</Typography>

                                {bool[index] === true ? <KeyboardArrowDownIcon sx={{ color: 'black', fontSize: "1.4rem" }} /> :
                                    <KeyboardArrowRightIcon sx={{ color: 'gray', fontSize: "1.2rem" }} />}

                            </>}

                    </Box>

                    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                        {bool[index] === true && data?.children?.map((drop: any) =>

                            <Box onClick={() => router.push(drop.path)} sx={{
                                width: "100%",
                                display: "flex",
                                px: 2, py: 1.2,
                                my: 0.5,
                                ml: 10,
                                alignItems: "center",
                                justifyContent: "start",
                                cursor: "pointer",
                                borderRadius: "40px",
                                '&:hover': {
                                    backgroundColor: "#7DF9FF",
                                    transition: "0.3s",
                                },
                            }}>

                                <FiberManualRecordIcon sx={{
                                    color: currentPath === drop.path ? "black" : "grey",
                                    fontSize: currentPath === drop.path ? "1rem" : "1rem",
                                    mr: "1rem",

                                }} />

                                <Typography variant='subtitle2' sx={{
                                    color: "black",
                                    fontSize: currentPath === drop.path ? "1.1rem" : "1rem",
                                    fontWeight: currentPath === drop.path ? "bold" : "normal",
                                }}>{drop.text}</Typography>

                            </Box>

                        )}

                    </Box>

                </Box>


            )
            }

        </Box >

    )
}
