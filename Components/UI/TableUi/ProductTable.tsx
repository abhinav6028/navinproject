"use client"
import { Grid, Table, TableContainer, TableRow, TableCell, TableBody, TableHead, Typography, Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Popup from "reactjs-popup";
import { useQueryFetch } from "../../../hooks/useFetch";
import { Delete, Edit } from "../ActionIcons/ActionIcons";
import { CreateButton } from "../Button/Button";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SECONDARY_COLOUR, PRIMARY_COLOUR, TABLE_FONT_COLOUR } from "../../../urls/colours";

function ProductTable(props: any) {

    const router = useRouter();

    const path = usePathname()

    const { TABLE_HEAD, TABLE_CELL, API_NAME, heading } = props

    const { fetchedData } = useQueryFetch(API_NAME);

    return (

        <Grid container justifyContent="center" sx={{ mb: 'auto' }}>

            <CreateButton heading={heading} path={path} />


            {/* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */}
            <Grid container lg={10} sx={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", borderRadius: 3,
                height: "fit-content",
                mt: { lg: 5 }
            }}>

                <TableContainer  >

                    <Table aria-label="simple table">

                        <TableHead sx={{ bgcolor: SECONDARY_COLOUR }}>

                            <TableRow>

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600, color: PRIMARY_COLOUR }} >SI No </Typography>

                                </TableCell>


                                {
                                    TABLE_HEAD.map((table_head: any, index: any) =>

                                        <TableCell align="center" key={index} >

                                            <Typography sx={{ fontWeight: 600, color: PRIMARY_COLOUR }} >{table_head}</Typography>

                                        </TableCell>
                                    )
                                }

                                <TableCell align="center">

                                    <Typography sx={{ fontWeight: 600, color: PRIMARY_COLOUR }} >Actions</Typography>

                                </TableCell>

                            </TableRow>

                        </TableHead>

                        <TableBody>

                            {
                                fetchedData?.map((data: any, index: any) =>

                                    <TableRow key={index} onClick={() => router.push(`${path}/detailpage/${data.id}`)} sx={{ "&:hover": { backgroundColor: SECONDARY_COLOUR } }}>

                                        <TableCell
                                            align="center">

                                            <Typography sx={{ color: TABLE_FONT_COLOUR }}> {index + 1} </Typography>

                                        </TableCell>

                                        {

                                            TABLE_CELL.map((items: any, index: any) =>

                                                <TableCell
                                                    key={index} sx={{ cursor: 'pointer' }} align="center">

                                                    <Typography sx={{ color: TABLE_FONT_COLOUR }}> {data[items]} </Typography>

                                                </TableCell>

                                            )

                                        }

                                        <TableCell align="center">

                                            <Popup trigger={<MoreVertIcon sx={{ cursor: 'pointer', color: TABLE_FONT_COLOUR }} />} position="right center">

                                                <Box bgcolor="#ffff" sx={{
                                                    borderRadius: 1.5,
                                                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                                                }}>

                                                    <Edit path={path} id={data.code} />

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

            </Grid>

        </Grid >

    )

}

export default ProductTable