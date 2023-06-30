"use client"
import { Grid, Table, TableContainer, TableRow, TableCell, TableBody, TableHead, Typography, Box } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useQueryFetch } from "../../../hooks/useFetch";
import { Delete, Edit } from "../ActionIcons/ActionIcons";
import { CreateButton } from "../Button/Button";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import React from 'react';
import Popup from 'reactjs-popup';

export default function TableUi(props: any) {

    const router = useRouter();

    const { TABLE_HEAD, TABLE_CELL, API_NAME, fileName, heading } = props

    const { fetchedData } = useQueryFetch(API_NAME);

    // console.log("fetchedData", API_NAME);

    // console.log("API_NAME", API_NAME);

    return (

        <Grid container justifyContent="center" sx={{ mt: 5 }}>

            <CreateButton

                heading={heading}

                fileName={fileName}

            />

            <Grid item container lg={11}
                sx={{

                    //box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
                    boxShadow: " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
                }}
            >

                <TableContainer>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">

                        <TableHead>

                            <TableRow>

                                {
                                    TABLE_HEAD.map((table_head: any, index: any) =>

                                        <TableCell align="center" key={index} >

                                            <Typography sx={{ fontWeight: 600 }} variant='h6'>{table_head}</Typography>

                                        </TableCell>
                                    )
                                }

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600 }} variant='h6'>ACTIONS</Typography>

                                </TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {
                                fetchedData?.map((data: any, index: any) =>

                                    <TableRow key={index}
                                        //onClick={() => router.push(`/${fileName}/detailpage/${data.id}`)}
                                        sx={{
                                            "&:hover": {
                                                backgroundColor: ' #E5E4E2',

                                            }
                                        }}>

                                        {

                                            TABLE_CELL.map((items: any, index: any) =>

                                                <TableCell

                                                    onClick={() => router.push(`/${fileName}/detailpage/${data.id}`)}
                                                    key={index} sx={{ cursor: 'pointer' }} align="center">

                                                    <Typography sx={{ fontWeight: 550 }}> {data[items]} </Typography>

                                                </TableCell>

                                            )

                                        }

                                        <TableCell align="center">

                                            <Popup trigger={<MoreVertIcon sx={{ cursor: 'pointer' }} />} position="right center">

                                                <Box bgcolor="#ffff" sx={{
                                                    borderRadius: 1.5,
                                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                                                }}>

                                                    <Edit fileName={fileName} id={data.id} />

                                                    <Delete url={API_NAME} id={data.id} />

                                                </Box>

                                            </Popup>

                                        </TableCell>

                                    </TableRow>

                                )
                            }

                        </TableBody>

                    </Table>

                </TableContainer>

            </Grid >

        </Grid >

    )

}
