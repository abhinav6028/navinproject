"use client"

import { Grid, Table, TableContainer, TableRow, TableCell, TableBody, TableHead, Typography, Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useQueryFetch } from "../../../hooks/useFetch";
import { Delete, Edit } from "../ActionIcons/ActionIcons";
import { PrimaryButton } from "../Button/Button";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import Popup from 'reactjs-popup';
import { BOX_SHADOWS, PRIMARY_COLOUR, SECONDARY_COLOUR, TABLE_FONT_COLOUR } from "../../../urls/colours";
import SkeletonLoading from "./SkeletonLoading";


export default function TableUi(props: any) {

    const router = useRouter();

    const path = usePathname()

    const { TABLE_HEAD, TABLE_CELL, API_NAME, heading } = props

    const { fetchedData } = useQueryFetch(API_NAME);

    console.log("fetchedData", fetchedData?.length);


    return (

        <Grid container justifyContent="center" sx={{ mt: { xs: 10, md: 0 } }}>

            <Grid container md={11} justifyContent="center"
                alignItems="start" height="fit-content" m={1}>

                <PrimaryButton bgcolor={PRIMARY_COLOUR} my={1}
                    onClick={() => router.push(`${path}/create`,)}>Create {API_NAME}</PrimaryButton>


                <TableContainer sx={{ mt: 3, boxShadow: BOX_SHADOWS, borderRadius: "10px" }} >

                    <Table aria-label="simple table">

                        <TableHead sx={{ bgcolor: SECONDARY_COLOUR }}>

                            <TableRow>

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600, color: "black" }} >SI No </Typography>

                                </TableCell>


                                {TABLE_HEAD.map((table_head: any, index: any) =>

                                    <TableCell align="center" key={index} >

                                        <Typography sx={{ fontWeight: 600, color: "black" }} >{table_head}</Typography>

                                    </TableCell>
                                )
                                }

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600, color: "black" }} >Actions</Typography>

                                </TableCell>

                            </TableRow>

                        </TableHead>



                        <TableBody>

                            {!fetchedData ? <SkeletonLoading TABLE_HEAD={TABLE_HEAD} /> :

                                fetchedData?.map((data: any, index: any) =>

                                    <TableRow key={index}
                                        onClick={() => router.push(`${path}/detailpage/${data.id}`)}
                                        sx={{ "&:hover": { backgroundColor: SECONDARY_COLOUR } }}>

                                        <TableCell align="center">

                                            <Typography sx={{ color: TABLE_FONT_COLOUR }}> {index + 1} </Typography>

                                        </TableCell>

                                        {

                                            TABLE_CELL.map((items: any, index: any) =>

                                                <TableCell
                                                    key={index} sx={{ cursor: 'pointer' }} align="center">

                                                    <Typography sx={{ color: TABLE_FONT_COLOUR }}> {data[items]} </Typography>

                                                </TableCell>

                                            )}

                                        <TableCell align="center">

                                            <Popup trigger={<MoreVertIcon sx={{ cursor: 'pointer', color: "grey" }} />} position="left center">

                                                <Grid container bgcolor="#ffff" sx={{
                                                    borderRadius: 1.5,
                                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", p: 1,
                                                }}>

                                                    <Edit path={path} id={data.id} />

                                                    <Delete url={API_NAME} id={data.id} />

                                                </Grid>

                                            </Popup>

                                        </TableCell>

                                    </TableRow>

                                )
                            }

                        </TableBody>

                    </Table>

                </TableContainer>

            </Grid>

        </Grid>


    )

}
