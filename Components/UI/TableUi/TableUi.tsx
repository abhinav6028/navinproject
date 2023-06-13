import Paper from '@material-ui/core/Paper/Paper'
import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
//import MoreVertIcon from '@mui/icons-material/MoreVert';
import getData from '../../../hooks/getdata';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/navigation';


export default async function TableUi(props: { API_NAME: any; TABLE_HEAD: any; TABLE_CELL: any; }) {

    const { API_NAME, TABLE_HEAD, TABLE_CELL } = props;

    const fetchedData = await getData(API_NAME)

    const data = fetchedData.result

    const router = useRouter()


    return (

        <Grid container justifyContent="center" >

            <Grid lg={11} sx={{ mt: 5 }}>

                <TableContainer component={Paper}>

                    <Table sx={{ width: '100%' }} aria-label="simple table">

                        <TableHead>

                            <TableRow >

                                {
                                    TABLE_HEAD.map((data: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) =>

                                        <TableCell key={index} align="center">

                                            <Typography sx={{
                                                fontWeight: 600
                                            }} variant='h6'>{data}</Typography>

                                        </TableCell>

                                    )
                                }

                                <TableCell align="center">

                                    <Typography sx={{
                                        fontWeight: 600
                                    }} variant='h6'>ACTIONS</Typography>

                                </TableCell>

                            </TableRow>

                        </TableHead>

                        {
                            data.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; code: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; category_id: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, index: React.Key | null | undefined) =>

                                <TableBody key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>


                                    {
                                        TABLE_CELL.map((data: any) =>

                                            <TableCell align="center">{item[data]}</TableCell>

                                        )
                                    }

                                    <TableCell align="center">

                                        <DeleteIcon />

                                        {/* <EditIcon sx={{ ml: 5 }} onClick={ () => router.push('/product/3')} /> */}

                                    </TableCell>

                                </TableBody>

                            )
                        }

                    </Table>

                </TableContainer>

            </Grid>

        </Grid >
    )
}
