import { Grid, Typography, TextField, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

function ItemFormTable(props: any) {

    const { items, setItems } = props

    const [productCode, setProductCode] = React.useState();
    const [quantity, setQuantity] = React.useState();
    const [discontType, setDisconTtype] = React.useState();
    const [discountAmount, setDiscountAmount] = React.useState();
    const [unitPrize, setUnitPrize] = React.useState();

    const add = (e) => {

        e.preventDefault();

        if (productCode && quantity && discontType && discountAmount && unitPrize) {

            const data = { productCode, quantity, discontType, discountAmount, unitPrize }

            setItems((itemList: any) => [...itemList, data])

            setProductCode("")
            setQuantity("")
            setDisconTtype("")
            setDiscountAmount("")
            setUnitPrize("")
        }

    }

    const handleRemoveClick = (item: any) => {
        setItems(items.filter((todo: any) => todo !== item));
    };

    return (
        <Grid container>

            <Typography variant='h4' sx={{ fontWeight: 550, mt: 3 }}>Items</Typography>

            <Grid container sx={{ mt: 3, justifyContent: "space-around" }} >

                <TextField name="productCode" value={productCode} onChange={(e) => setProductCode(e.target.value)} label="Product" variant="outlined" type="text" />

                <TextField name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} label="Quanity" variant="outlined" type="number" />

                <TextField name="discontType" value={discontType} onChange={(e) => setDisconTtype(e.target.value)} label="Discount type" variant="outlined" type="number" />

                <TextField name="discountAmount" value={discountAmount} onChange={(e) => setDiscountAmount(e.target.value)} label="Discount Amount" variant="outlined" type="number" />

                <TextField name="unitPrize" value={unitPrize} onChange={(e) => setUnitPrize(e.target.value)} label="Unit Prize" variant="outlined" type="number" />

                <button onClick={add}>Add</button>

            </Grid>

            {
                items.length == 0 ? ''
                    :
                    <Grid container mt={8}>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="caption table">

                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center"> product Code</TableCell>
                                        <TableCell align="center">Quantity</TableCell>
                                        <TableCell align="center">Discount Type</TableCell>
                                        <TableCell align="center">Discount Amount</TableCell>
                                        <TableCell align="center">Unit Prize</TableCell>
                                        <TableCell align="center">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        items.map((data: any, index: any) =>

                                            <TableRow key={index}>
                                                <TableCell align="center">{data.productCode}</TableCell>
                                                <TableCell align="center">{data.quantity}</TableCell>
                                                <TableCell align="center">{data.discontType}</TableCell>
                                                <TableCell align="center">{data.discountAmount}</TableCell>
                                                <TableCell align="center">{data.unitPrize}</TableCell>

                                                <TableCell align="center" sx={{ display: 'flex', justifyContent: 'space-around' }}>

                                                    <DeleteOutlineIcon sx={{ cursor: 'pointer' }} onClick={() => handleRemoveClick(data)} />

                                                    <EditIcon sx={{ cursor: 'pointer' }} />

                                                </TableCell>

                                            </TableRow>

                                        )
                                    }

                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>

            }



        </Grid >
    )
}

export default ItemFormTable