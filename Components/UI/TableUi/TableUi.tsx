
import { Grid, Table, TableContainer, TableRow, TableCell, TableBody, TableHead, Typography } from "@mui/material";
import getData from "../../../hooks/getdata";
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from "next/navigation";
import EditIcon from "../EditIcon/EditIcon";

export default async function TableUi(props: any) {

    const { TABLE_HEAD, TABLE_CELL, API_NAME } = props

    const fetchedData = await getData(API_NAME)

    const data = fetchedData.result

    //console.log("data", fetchedData.result)


    return (

        <Grid container justifyContent="center">

            <Grid item container lg={11}>
                <TableContainer>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">

                        <TableHead>

                            <TableRow>

                                {
                                    TABLE_HEAD.map((table_head: any, index: any) =>

                                        <TableCell align="center" key={index}>

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

                            <TableRow sx={{
                                '&:last-child td, &:last-child th': { border: 0 }
                            }}>

                                {
                                    data.map((data: any, index: any) =>

                                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                            {
                                                TABLE_CELL.map((items: any, index: any) =>

                                                    <TableCell key={index} sx={{ cursor: 'pointer' }} align="center">{data[items]}</TableCell>

                                                )

                                            }

                                            <TableCell align="center">

                                                <EditIcon />

                                                {/* <DeleteIcon sx={{ ml: 3, cursor: 'pointer' }} /> */}

                                            </TableCell>

                                        </TableRow>

                                    )

                                }

                            </TableRow>

                        </TableBody>

                    </Table>

                </TableContainer>

            </Grid>

        </Grid >

    )

}
